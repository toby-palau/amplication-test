import { ScanHistory } from "../scanHistory/ScanHistory";

export type Product = {
  barcode: number | null;
  createdAt: Date;
  id: string;
  productName: string | null;
  scanHistory?: Array<ScanHistory>;
  updatedAt: Date;
};
