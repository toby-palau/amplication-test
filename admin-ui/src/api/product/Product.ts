import { ScanHistory } from "../scanHistory/ScanHistory";

export type Product = {
  code: number | null;
  compared_to_category: string | null;
  emissions: number | null;
  countries: string | null;
  createdAt: Date;
  id: string;
  palmOil: boolean | null;
  product_name: string;
  scanHistory?: Array<ScanHistory>;
  updatedAt: Date;
};
