import { Type, Static } from '@sinclair/typebox';

export const EntryCategoriesSchema = Type.Object(
  {
    oc_id: Type.String({format: 'uuid' }),
    oc_entry: Type.String({ maxLength: 36 }),
    oc_category: Type.String({ maxLength: 36 }),
    oc_default: Type.Boolean()
  },
  { $id: 'EntryCategories', additionalProperties: false }
)
export type EntryCategoriesType = Static<typeof EntryCategoriesSchema>