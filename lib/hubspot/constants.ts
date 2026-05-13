/**
 * HubSpot: δημιουργήστε custom contact properties με αυτά τα internal names
 * (Settings → Data Management → Properties → Contacts).
 *
 * Standard: firstname, lastname, email, phone
 * Custom: customer_message, service_area, service_type, project_budget,
 *          urgency_level, lead_source, form_submitted_at (datetime)
 */
export const HUBSPOT_CONTACT_PROPERTY = {
  customerMessage: "customer_message",
  serviceArea: "service_area",
  serviceType: "service_type",
  projectBudget: "project_budget",
  urgencyLevel: "urgency_level",
  leadSource: "lead_source",
  formSubmittedAt: "form_submitted_at",
} as const;

/** Επιτρεπτές τιμές service_type (dropdown στο HubSpot) */
export const SERVICE_TYPE_VALUES = [
  "ηλεκτρολογικά",
  "υδραυλικά",
  "ανακαίνιση μπάνιου",
  "ανακαίνιση κουζίνας",
  "γενική ανακαίνιση",
  "πλακάκια / δάπεδα",
  "οποιοδήποτε άλλο σχετικό service",
] as const;

export type ServiceTypeValue = (typeof SERVICE_TYPE_VALUES)[number];

export const DEFAULT_SERVICE_TYPE: ServiceTypeValue =
  "οποιοδήποτε άλλο σχετικό service";

export const URGENCY_VALUES = ["low", "medium", "high"] as const;
export type UrgencyValue = (typeof URGENCY_VALUES)[number];

export const DEFAULT_URGENCY: UrgencyValue = "medium";

export const LEAD_SOURCE_WEBSITE = "website contact form";
