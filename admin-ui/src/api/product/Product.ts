import { ScanHistory } from "../scanHistory/ScanHistory";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  scanHistory?: Array<ScanHistory>;
  updatedAt: Date;
};
