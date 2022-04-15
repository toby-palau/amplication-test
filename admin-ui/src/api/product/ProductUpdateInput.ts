import { ScanHistoryUpdateManyWithoutProductsInput } from "./ScanHistoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  code?: number | null;
  compared_to_category?: string | null;
  emissions?: number | null;
  country?: string | null;
  palmOil?: boolean | null;
  product_name?: string;
  scanHistory?: ScanHistoryUpdateManyWithoutProductsInput;
};
