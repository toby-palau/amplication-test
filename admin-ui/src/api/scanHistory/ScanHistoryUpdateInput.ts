import { ProductUpdateManyWithoutScanHistoriesInput } from "./ProductUpdateManyWithoutScanHistoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScanHistoryUpdateInput = {
  products?: ProductUpdateManyWithoutScanHistoriesInput;
  users?: UserWhereUniqueInput;
};
