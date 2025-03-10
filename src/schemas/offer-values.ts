import { Type, Static } from '@sinclair/typebox';

export const OfferValuesSchema = Type.Object(
  {
    value_id: Type.String({ format: 'uuid', maxLength: 36 }),
    value_offer: Type.String({ maxLength: 56 }),
    value_field: Type.String({ format: 'uuid', maxLength: 36 }),
    value_option: Type.Optional(Type.String({ format: 'uuid', maxLength: 36 })),
    value_free: Type.String()
  },
  { $id: 'OfferValues', additionalProperties: false }
)
export type OfferValuesType = Static<typeof OfferValuesSchema>