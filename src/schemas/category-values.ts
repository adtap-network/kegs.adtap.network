import { Type, Static } from '@sinclair/typebox';

export const CategoryValuesSchema = Type.Object(
  {
    value_id: Type.String({ format: 'uuid', maxLength: 36 }),
    value_category: Type.String({ format: 'uuid', maxLength: 36 }),
    value_option: Type.Optional(Type.String({ format: 'uuid', maxLength: 36 })),
    value_free: Type.String()
  },
  { $id: 'CategoryValues', additionalProperties: false }
)
export type CategoryValuesType = Static<typeof CategoryValuesSchema>