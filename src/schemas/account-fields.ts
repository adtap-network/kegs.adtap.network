import { Type, Static } from '@sinclair/typebox';

export const AccountFieldsSchema = Type.Object(
  {
    field_id: Type.String({ format: 'uuid' }),
    field_class: Type.String({ maxLength: 18 }),
    field_type: Type.String({ maxLength: 18 }),
    field_key: Type.String({ maxLength: 56 }),
    field_label: Type.String({ maxLength: 144 }),
    field_sort: Type.Integer()
  },
  { $id: 'AccountFields', additionalProperties: false }
)
export type AccountFieldsType = Static<typeof AccountFieldsSchema>