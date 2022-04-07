import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScanHistoryWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  users?: UserWhereUniqueInput;
};
