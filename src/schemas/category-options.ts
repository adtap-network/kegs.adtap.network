import { Type, Static } from '@sinclair/typebox';

export const CategoryOptionsSchema = Type.Object(
  {
    option_id: Type.String({ format: 'uuid', maxLength: 36 }),
    option_field: Type.String({ maxLength: 36 }),
    option_type: Type.String({ maxLength: 18 }),
    option_label: Type.String({ maxLength: 144 }),
    option_value: Type.String(),
    option_sort: Type.Integer()
  },
  { $id: 'CategoryOptions', additionalProperties: false }
)
export type CategoryOptionsType = Static<typeof CategoryOptionsSchema>