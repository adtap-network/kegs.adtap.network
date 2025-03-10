import { Type, Static } from '@sinclair/typebox';

export const AccountContactsSchema = Type.Object(
  {
    contact_id: Type.String({ format: 'uuid' }),
    contact_account: Type.String({ maxLength: 56 }),
    contact_target: Type.String({ maxLength: 56 })
  },
  { $id: 'AccountContacts', additionalProperties: false }
)
export type AccountContactsType = Static<typeof AccountContactsSchema>