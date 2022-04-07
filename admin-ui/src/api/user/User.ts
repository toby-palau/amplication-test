import { ScanHistory } from "../scanHistory/ScanHistory";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  scanHistory?: ScanHistory;
  updatedAt: Date;
  username: string;
};
