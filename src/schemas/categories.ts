import { Type, Static } from '@sinclair/typebox';

export const CategoriesSchema = Type.Object(
  {
    category_id: Type.String({ format: 'uuid', maxLength: 36 }),
    category_root: Type.String({ format: 'uuid', maxLength: 36 }),
    category_parent: Type.String({ format: 'uuid', maxLength: 36 }),
    category_class: Type.String({ maxLength: 18 }),
    category_title: Type.String({ maxLength: 360 }),
    category_photo: Type.String(),
    category_descr: Type.String(),
    category_level: Type.Integer(),
    category_sort: Type.Integer()
  },
  { $id: 'Categories', additionalProperties: false }
)
export type CategoriesType = Static<typeof CategoriesSchema>