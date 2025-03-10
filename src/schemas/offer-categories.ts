import { Type, Static } from '@sinclair/typebox';

export const OfferCategoriesSchema = Type.Object(
  {
    oc_id: Type.String({format: 'uuid' }),
    oc_offer: Type.String({ maxLength: 36 }),
    oc_category: Type.String({ maxLength: 36 }),
    oc_default: Type.Boolean()
  },
  { $id: 'OfferCategories', additionalProperties: false }
)
export type OfferCategoriesType = Static<typeof OfferCategoriesSchema>