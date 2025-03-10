import { Type, Static } from '@sinclair/typebox';

export const OfferKeywordsSchema = Type.Object(
  {
    keyword_id: Type.String({ format: 'uuid', maxLength: 36 }),
    keyword_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    keyword_text: Type.String({ maxLength: 360 })
  },
  { $id: 'OfferKeywords', additionalProperties: false }
)
export type OfferKeywordsType = Static<typeof OfferKeywordsSchema>