import { HUBSPOT_CONTACT_PROPERTY, LEAD_SOURCE_WEBSITE } from "./constants";
import { hubspotJson, isHubSpotConfigured } from "./hubspot-client";
import { normalizeServiceType, normalizeUrgency } from "./normalize-lead-fields";
import { splitFullName } from "./split-full-name";
import type { HubSpotLeadInput } from "./types";

const LOG_PREFIX = "[HubSpot CRM]";

/** HubSpot default: deal → contact association */
const DEAL_TO_CONTACT_ASSOCIATION_TYPE_ID = 3;

type HubSpotObjectCreateResponse = { id: string };

function logHubSpotFailure(
  context: string,
  status: number,
  detail: string
): void {
  console.error(`${LOG_PREFIX} ${context}`, { status, detail });
}

export async function syncLeadToHubSpot(input: HubSpotLeadInput): Promise<void> {
  if (!isHubSpotConfigured()) {
    console.warn(
      `${LOG_PREFIX} Skipping sync: HUBSPOT_ACCESS_TOKEN is not configured.`
    );
    return;
  }

  try {
    const { firstname, lastname } = splitFullName(input.name);
    const serviceType = normalizeServiceType(input.service_type);
    const urgency = normalizeUrgency(input.urgency);
    const area = input.area?.trim() ?? "";
    const budget = input.budget?.trim() ?? "";
    const submittedMs = Date.now();

    const contactProps: Record<string, string> = {
      firstname,
      lastname,
      email: input.email.trim(),
      phone: input.phone.trim(),
      [HUBSPOT_CONTACT_PROPERTY.customerMessage]: input.message.trim(),
      [HUBSPOT_CONTACT_PROPERTY.serviceType]: serviceType,
      [HUBSPOT_CONTACT_PROPERTY.urgencyLevel]: urgency,
      [HUBSPOT_CONTACT_PROPERTY.leadSource]: LEAD_SOURCE_WEBSITE,
      [HUBSPOT_CONTACT_PROPERTY.formSubmittedAt]: String(submittedMs),
    };

    if (area) {
      contactProps[HUBSPOT_CONTACT_PROPERTY.serviceArea] = area;
    }
    if (budget) {
      contactProps[HUBSPOT_CONTACT_PROPERTY.projectBudget] = budget;
    }

    const contactRes = await hubspotJson<HubSpotObjectCreateResponse>(
      "/crm/v3/objects/contacts",
      { method: "POST", body: { properties: contactProps } }
    );

    if (!contactRes.ok) {
      logHubSpotFailure(
        "Contact create failed",
        contactRes.status,
        contactRes.bodyText
      );
      return;
    }

    const contactId = contactRes.data.id;
    const pipelineId = process.env.HUBSPOT_DEAL_PIPELINE_ID?.trim();
    const stageId = process.env.HUBSPOT_DEAL_STAGE_ID?.trim();

    if (!pipelineId || !stageId) {
      console.warn(
        `${LOG_PREFIX} Deal skipped: set HUBSPOT_DEAL_PIPELINE_ID and HUBSPOT_DEAL_STAGE_ID (internal IDs for pipeline stage «NEW LEAD»). Contact was created.`,
        { contactId }
      );
      return;
    }

    const dealName = `${serviceType} - ${input.name.trim()}`;

    const dealRes = await hubspotJson<HubSpotObjectCreateResponse>(
      "/crm/v3/objects/deals",
      {
        method: "POST",
        body: {
          properties: {
            dealname: dealName,
            pipeline: pipelineId,
            dealstage: stageId,
          },
          associations: [
            {
              to: { id: contactId },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: DEAL_TO_CONTACT_ASSOCIATION_TYPE_ID,
                },
              ],
            },
          ],
        },
      }
    );

    if (!dealRes.ok) {
      logHubSpotFailure(
        "Deal create failed",
        dealRes.status,
        dealRes.bodyText
      );
      return;
    }
  } catch (err) {
    console.error(`${LOG_PREFIX} Unexpected error during sync`, err);
  }
}
