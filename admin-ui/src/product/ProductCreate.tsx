import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScanHistoryTitle } from "../scanHistory/ScanHistoryTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Barcode" source="code" />
        <TextInput label="Category" source="compared_to_category" />
        <NumberInput label="CO2 Emission" source="emissions" />
        <TextInput label="Country" source="country" />
        <BooleanInput label="Palm Oil" source="palmOil" />
        <TextInput label="Product Name" source="product_name" />
        <ReferenceArrayInput
          source="scanHistory"
          reference="ScanHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScanHistoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
