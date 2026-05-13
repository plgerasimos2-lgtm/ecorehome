export type HubSpotLeadInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  /** Προαιρετικά — η τρέχουσα φόρμα δεν τα στέλνει· διατηρούνται για επεκτάσιμο API */
  area?: string;
  service_type?: string;
  budget?: string;
  urgency?: string;
};
