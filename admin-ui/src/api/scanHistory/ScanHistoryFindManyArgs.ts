import { ScanHistoryWhereInput } from "./ScanHistoryWhereInput";
import { ScanHistoryOrderByInput } from "./ScanHistoryOrderByInput";

export type ScanHistoryFindManyArgs = {
  where?: ScanHistoryWhereInput;
  orderBy?: Array<ScanHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
