export function splitFullName(full: string): {
  firstname: string;
  lastname: string;
} {
  const normalized = full.trim().replace(/\s+/g, " ");
  if (!normalized) {
    return { firstname: "-", lastname: "-" };
  }
  const space = normalized.indexOf(" ");
  if (space === -1) {
    return { firstname: normalized, lastname: "-" };
  }
  const firstname = normalized.slice(0, space).trim();
  const lastname = normalized.slice(space + 1).trim() || "-";
  return { firstname, lastname };
}
