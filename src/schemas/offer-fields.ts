import { Type, Static } from '@sinclair/typebox';

export const OfferFieldsSchema = Type.Object(
  {
    field_id: Type.String({ format: 'uuid', maxLength: 36 }),
    field_class: Type.String({ maxLength: 18 }),
    field_type: Type.String({ maxLength: 18 }),
    field_key: Type.String({ maxLength: 56 }),
    field_label: Type.String({ maxLength: 144 }),
    field_sort: Type.Integer()
  },
  { $id: 'OfferFields', additionalProperties: false }
)
export type OfferFieldsType = Static<typeof OfferFieldsSchema>