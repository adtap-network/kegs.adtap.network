import { Type, Static } from '@sinclair/typebox';

export const LanguagesSchema = Type.Object(
  {
    lang_id: Type.String({ format: 'uuid', maxLength: 36 }),
    lang_name: Type.String({ maxLength: 180 }),
    lang_code: Type.String({ maxLength: 8 })

  },
  { $id: 'Languages', additionalProperties: false }
)
export type LanguagesType = Static<typeof LanguagesSchema>