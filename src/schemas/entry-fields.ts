import { Type, Static } from '@sinclair/typebox';

export const EntryFieldsSchema = Type.Object(
  {
    field_id: Type.String({ format: 'uuid', maxLength: 36 }),
    field_class: Type.String({ maxLength: 18 }),
    field_type: Type.String({ maxLength: 18 }),
    field_key: Type.String({ maxLength: 56 }),
    field_label: Type.String({ maxLength: 144 }),
    field_sort: Type.Integer()
  },
  { $id: 'EntryFields', additionalProperties: false }
)
export type EntryFieldsType = Static<typeof EntryFieldsSchema>