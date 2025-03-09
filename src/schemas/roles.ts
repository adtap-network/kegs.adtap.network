import { Type, Static } from '@sinclair/typebox';

export const RolesSchema = Type.Object(
  {
    role_id: Type.String({ maxLength: 36}),
    role_class: Type.String({ maxLength: 18}),
    role_name: Type.String({maxLength: 18}),
    role_label: Type.String({maxLength: 144}),
    role_level: Type.Integer()
  },
  { $id: 'Roles', additionalProperties: false }
)
export type RolesType = Static<typeof RolesSchema>