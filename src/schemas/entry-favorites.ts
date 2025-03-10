import { Type, Static } from '@sinclair/typebox';

export const EntryFavoritesSchema = Type.Object(
  {
    favorite_id: Type.String({ format: 'uuid', maxLength: 36 }),
    favorite_entry: Type.String({ format: 'uuid', maxLength: 36 }),
    favorite_account: Type.String({ maxLength: 56 }),
    favorite_createdon: Type.String({ format: 'date-time' })
  },
  { $id: 'EntryFavorites', additionalProperties: false }
)
export type EntryFavoritesType = Static<typeof EntryFavoritesSchema>