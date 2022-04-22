import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ScanHistoryListRelationFilter } from "../scanHistory/ScanHistoryListRelationFilter";

export type ProductWhereInput = {
  code?: StringNullableFilter;
  compared_to_category?: StringNullableFilter;
  emissions?: FloatNullableFilter;
  countries?: StringNullableFilter;
  id?: StringFilter;
  palmOil?: BooleanNullableFilter;
  product_name?: StringFilter;
  scanHistory?: ScanHistoryListRelationFilter;
};
