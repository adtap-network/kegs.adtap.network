import { Type, Static } from '@sinclair/typebox';

export const OfferReviewsSchema = Type.Object(
  {
    review_id: Type.String({ format: 'uuid', maxLength: 36 }),
    review_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    review_account: Type.String({ maxLength: 56 }),
    review_addedon: Type.String({ format: 'date-time' }),
    review_text: Type.String(),
    review_stars: Type.Number()
  },
  { $id: 'OfferReviews', additionalProperties: false }
)
export type OfferReviewsType = Static<typeof OfferReviewsSchema>