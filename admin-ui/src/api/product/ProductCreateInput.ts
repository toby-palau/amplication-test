import { ScanHistoryCreateNestedManyWithoutProductsInput } from "./ScanHistoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  barcode?: number | null;
  productName?: string | null;
  scanHistory?: ScanHistoryCreateNestedManyWithoutProductsInput;
};
