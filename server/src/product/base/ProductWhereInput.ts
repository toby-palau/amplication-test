/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScanHistoryListRelationFilter } from "../../scanHistory/base/ScanHistoryListRelationFilter";
@InputType()
class ProductWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  barcode?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  productName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ScanHistoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ScanHistoryListRelationFilter)
  @IsOptional()
  @Field(() => ScanHistoryListRelationFilter, {
    nullable: true,
  })
  scanHistory?: ScanHistoryListRelationFilter;
}
export { ProductWhereInput };