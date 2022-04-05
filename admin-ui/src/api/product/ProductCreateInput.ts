import { ScanHistoryCreateNestedManyWithoutProductsInput } from "./ScanHistoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  scanHistory?: ScanHistoryCreateNestedManyWithoutProductsInput;
};
