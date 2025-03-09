import { Type, Static } from '@sinclair/typebox';

export const OffersSchema = Type.Object(
  {
    offer_id: Type.String({ format: 'uuid', maxLength: 36 }),
    offer_account: Type.String({ maxLength: 56 }),
    offer_type: Type.String({ maxLength: 18 }),
    offer_status: Type.String({ maxLength: 18 }),
    offer_terms: Type.String({ maxLength: 72 }),
    offer_title: Type.String({ maxLength: 144 }),
    offer_code: Type.String({ maxLength: 36 }),
    offer_slug: Type.String({ maxLength: 360 }),
    offer_descr: Type.String(),
    offer_photo: Type.String()
  },
  { $id: 'Offers', additionalProperties: false }
)
export type OffersType = Static<typeof OffersSchema>