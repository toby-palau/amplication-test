import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScanHistoryWhereUniqueInput } from "../scanHistory/ScanHistoryWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  scanHistory?: ScanHistoryWhereUniqueInput;
  username?: StringFilter;
};
