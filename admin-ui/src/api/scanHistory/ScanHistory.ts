import { Product } from "../product/Product";
import { User } from "../user/User";

export type ScanHistory = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
  users?: User | null;
};
