import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  code?: SortOrder;
  compared_to_category?: SortOrder;
  emissions?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  palmOil?: SortOrder;
  product_name?: SortOrder;
  updatedAt?: SortOrder;
};
