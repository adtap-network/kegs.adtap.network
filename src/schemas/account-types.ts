import { Type, Static } from '@sinclair/typebox';

export const AccountTypesSchema = Type.Object(
  {
    type_id: Type.String({ format: 'uuid', maxLength: 36 }),
    type_label: Type.String({ maxLength: 144 })
  },
  { $id: 'AccountTypes', additionalProperties: false }
)
export type AccountTypesType = Static<typeof AccountTypesSchema>