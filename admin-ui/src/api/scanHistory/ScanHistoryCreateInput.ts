import { ProductCreateNestedManyWithoutScanHistoriesInput } from "./ProductCreateNestedManyWithoutScanHistoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScanHistoryCreateInput = {
  products?: ProductCreateNestedManyWithoutScanHistoriesInput;
  users: UserWhereUniqueInput;
};
