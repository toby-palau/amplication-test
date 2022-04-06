import { ProductCreateNestedManyWithoutScanHistoriesInput } from "./ProductCreateNestedManyWithoutScanHistoriesInput";

export type ScanHistoryCreateInput = {
  products?: ProductCreateNestedManyWithoutScanHistoriesInput;
};
