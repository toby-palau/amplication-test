import { ScanHistoryWhereUniqueInput } from "../scanHistory/ScanHistoryWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  scanHistory?: ScanHistoryWhereUniqueInput;
  username?: string;
};
