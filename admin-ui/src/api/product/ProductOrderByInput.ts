import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
