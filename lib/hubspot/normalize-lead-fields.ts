import {
  DEFAULT_SERVICE_TYPE,
  DEFAULT_URGENCY,
  SERVICE_TYPE_VALUES,
  type ServiceTypeValue,
  type UrgencyValue,
  URGENCY_VALUES,
} from "./constants";

function isServiceType(v: string): v is ServiceTypeValue {
  return (SERVICE_TYPE_VALUES as readonly string[]).includes(v);
}

function isUrgency(v: string): v is UrgencyValue {
  return (URGENCY_VALUES as readonly string[]).includes(v);
}

export function normalizeServiceType(raw: string | undefined): ServiceTypeValue {
  if (!raw?.trim()) return DEFAULT_SERVICE_TYPE;
  const t = raw.trim();
  return isServiceType(t) ? t : DEFAULT_SERVICE_TYPE;
}

export function normalizeUrgency(raw: string | undefined): UrgencyValue {
  if (!raw?.trim()) return DEFAULT_URGENCY;
  const t = raw.trim().toLowerCase();
  return isUrgency(t) ? t : DEFAULT_URGENCY;
}
