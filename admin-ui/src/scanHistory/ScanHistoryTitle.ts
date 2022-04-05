import { ScanHistory as TScanHistory } from "../api/scanHistory/ScanHistory";

export const SCANHISTORY_TITLE_FIELD = "id";

export const ScanHistoryTitle = (record: TScanHistory): string => {
  return record.id || record.id;
};
