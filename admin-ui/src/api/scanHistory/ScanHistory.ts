import { Product } from "../product/Product";

export type ScanHistory = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
