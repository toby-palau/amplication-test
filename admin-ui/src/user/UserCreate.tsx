import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScanHistoryTitle } from "../scanHistory/ScanHistoryTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="scanhistory.id"
          reference="ScanHistory"
          label="Scan History"
        >
          <SelectInput optionText={ScanHistoryTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
