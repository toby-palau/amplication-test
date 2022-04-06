import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ScanHistoryWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
