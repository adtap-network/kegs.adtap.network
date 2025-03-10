import { Type, Static } from '@sinclair/typebox';

export const AccountPermsSchema = Type.Object(
  {
    perm_id: Type.String({ maxLength: 36, format: 'uuid' }),
    perm_account: Type.String({ maxLength: 56 }),
    perm_role: Type.String({ maxLength: 36})
  },
  { $id: 'AccountPerms', additionalProperties: false }
)
export type AccountPermsType = Static<typeof AccountPermsSchema>

