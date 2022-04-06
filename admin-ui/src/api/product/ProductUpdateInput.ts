import { ScanHistoryUpdateManyWithoutProductsInput } from "./ScanHistoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  barcode?: number | null;
  productName?: string | null;
  scanHistory?: ScanHistoryUpdateManyWithoutProductsInput;
};
