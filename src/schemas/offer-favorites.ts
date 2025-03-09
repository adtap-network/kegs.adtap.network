import { Type, Static } from '@sinclair/typebox';

export const OfferFavoritesSchema = Type.Object(
  {
    favorite_id: Type.String({ format: 'uuid', maxLength: 36 }),
    favorite_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    favorite_account: Type.String({ maxLength: 56 }),
    favorite_createdon: Type.String({ format: 'date-time' })
  },
  { $id: 'OfferFavorites', additionalProperties: false }
)
export type OfferFavoritesType = Static<typeof OfferFavoritesSchema>