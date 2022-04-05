import { ScanHistoryUpdateManyWithoutProductsInput } from "./ScanHistoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  scanHistory?: ScanHistoryUpdateManyWithoutProductsInput;
};
