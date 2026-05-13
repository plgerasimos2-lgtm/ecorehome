const HUBSPOT_API_BASE = "https://api.hubapi.com";

function getToken(): string | undefined {
  const t = process.env.HUBSPOT_ACCESS_TOKEN?.trim();
  return t || undefined;
}

export function isHubSpotConfigured(): boolean {
  return Boolean(getToken());
}

type HubSpotFetchInit = Omit<RequestInit, "body"> & { body?: unknown };

export async function hubspotJson<T>(
  path: string,
  init: HubSpotFetchInit
): Promise<{ ok: true; data: T } | { ok: false; status: number; bodyText: string }> {
  const token = getToken();
  if (!token) {
    return { ok: false, status: 0, bodyText: "missing_token" };
  }

  const { body, headers: initHeaders, ...rest } = init;
  const headers: HeadersInit = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    ...(initHeaders as HeadersInit),
  };

  const res = await fetch(`${HUBSPOT_API_BASE}${path}`, {
    ...rest,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const bodyText = await res.text();
  if (!res.ok) {
    return { ok: false, status: res.status, bodyText };
  }

  try {
    return { ok: true, data: JSON.parse(bodyText) as T };
  } catch {
    return { ok: false, status: res.status, bodyText: "invalid_json" };
  }
}
