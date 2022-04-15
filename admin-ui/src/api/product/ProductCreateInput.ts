import { ScanHistoryCreateNestedManyWithoutProductsInput } from "./ScanHistoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  code?: number | null;
  compared_to_category?: string | null;
  emissions?: number | null;
  country?: string | null;
  palmOil?: boolean | null;
  product_name: string;
  scanHistory?: ScanHistoryCreateNestedManyWithoutProductsInput;
};
