import { Type, Static } from '@sinclair/typebox';

export const EntryCommentsSchema = Type.Object(
  {
    comment_id: Type.String({ format: 'uuid', maxLength: 36 }),
    comment_entry: Type.String({ format: 'uuid', maxLength: 36 }),
    comment_account: Type.String({ maxLength: 56 }),
    comment_addedon: Type.String({ format: 'date-time' }),
    comment_text: Type.String(),
    comment_stars: Type.Number()
  },
  { $id: 'EntryComments', additionalProperties: false }
)
export type EntryCommentsType = Static<typeof EntryCommentsSchema>