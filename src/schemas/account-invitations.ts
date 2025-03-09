import { Type, Static } from '@sinclair/typebox';

export const AccountInvitationsSchema = Type.Object(
  {
    invite_id: Type.String({ format: 'uuid', maxLength: 36 }),
    invite_account: Type.String({ maxLength: 56 }),
    invite_class: Type.String({ maxLength: 18 }),
    invite_status: Type.String({ maxLength: 36 }),
    invite_type: Type.String({ maxLength: 18 }),
    invite_login: Type.String({ maxLength: 72 }),
    invite_code: Type.String({ maxLength: 30 }),
    invite_full: Type.String({ maxLength: 72 }),
    invite_email: Type.String({ format: 'email', maxLength: 144 }),
    invite_phone: Type.String({ maxLength: 18 }),
    invite_zip: Type.String({ maxLength: 18 }),
    invite_hash: Type.String(),
    invite_nonce: Type.Integer(),
    invite_dob: Type.String({ format: 'date-time' }),
    invite_createdon: Type.String({ format: 'date-time' }),
    invite_updatedon: Type.String({ format: 'date-time' })
  },
  { $id: 'AccountInvitations', additionalProperties: false }
)
export type AccountInvitationsType = Static<typeof AccountInvitationsSchema>