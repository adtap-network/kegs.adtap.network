import { Type, Static } from '@sinclair/typebox';

export const AccountValuesSchema = Type.Object(
  {
    value_id: Type.String({ format: 'uuid', maxLength: 36 }),
    value_account: Type.String({ maxLength: 56 }),
    value_field: Type.String({ format: 'uuid', maxLength: 36 }),
    value_option: Type.Optional(Type.String({ format: 'uuid', maxLength: 36 })),
    value_free: Type.String()
  },
  { $id: 'AccountValues', additionalProperties: false }
)
export type AccountValuesType = Static<typeof AccountValuesSchema>