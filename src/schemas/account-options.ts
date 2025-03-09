import { Type, Static } from '@sinclair/typebox';

export const AccountOptionsSchema = Type.Object(
  {
    option_id: Type.String({ maxLength: 36 }),
    option_field: Type.String({ maxLength: 36 }),
    option_label: Type.String({ maxLength: 144 }),
    option_value: Type.String(),
    option_sort: Type.Integer()
  },
  { $id: 'AccountOptions', additionalProperties: false }
)
export type AccountOptionsType = Static<typeof AccountOptionsSchema>