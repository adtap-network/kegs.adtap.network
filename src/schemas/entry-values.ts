import { Type, Static } from '@sinclair/typebox';

export const EntryValuesSchema = Type.Object(
  {
    value_id: Type.String({ format: 'uuid', maxLength: 36 }),
    value_entry: Type.String({ maxLength: 56 }),
    value_field: Type.String({ format: 'uuid', maxLength: 36 }),
    value_option: Type.Optional(Type.String({ format: 'uuid', maxLength: 36 })),
    value_free: Type.String()
  },
  { $id: 'EntryValues', additionalProperties: false }
)
export type EntryValuesType = Static<typeof EntryValuesSchema>