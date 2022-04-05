import { SortOrder } from "../../util/SortOrder";

export type ScanHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  usersId?: SortOrder;
};
