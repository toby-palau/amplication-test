import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "product_name";

export const ProductTitle = (record: TProduct): string => {
  return record.product_name || record.id;
};
