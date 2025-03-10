import { Type, Static } from '@sinclair/typebox';

export const EntryOptionsSchema = Type.Object(
  {
    option_id: Type.String({ format: 'uuid', maxLength: 36 }),
    option_field: Type.String({ format: 'uuid', maxLength: 36 }),
    option_type: Type.String({ maxLength: 18 }),
    option_label: Type.String({ maxLength: 144 }),
    option_value: Type.String(),
    option_sort: Type.Integer()
  },
  { $id: 'EntryOptions', additionalProperties: false }
)
export type EntryOptionsType = Static<typeof EntryOptionsSchema>