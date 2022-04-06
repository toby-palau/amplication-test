import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScanHistoryListRelationFilter } from "../scanHistory/ScanHistoryListRelationFilter";

export type ProductWhereInput = {
  barcode?: IntNullableFilter;
  id?: StringFilter;
  productName?: StringNullableFilter;
  scanHistory?: ScanHistoryListRelationFilter;
};
