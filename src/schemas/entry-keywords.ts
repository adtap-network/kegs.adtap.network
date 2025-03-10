import { Type, Static } from '@sinclair/typebox';

export const EntryKeywordsSchema = Type.Object(
  {
    keyword_id: Type.String({ format: 'uuid', maxLength: 36 }),
    keyword_entry: Type.String({ format: 'uuid', maxLength: 36 }),
    keyword_text: Type.String({ maxLength: 360 })
  },
  { $id: 'EntryKeywords', additionalProperties: false }
)
export type EntryKeywordsType = Static<typeof EntryKeywordsSchema>