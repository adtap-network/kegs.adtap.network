import { Type, Static } from '@sinclair/typebox';

export const AccountsSchema = Type.Object({
  account_id: Type.String({ maxLength: 56 }),
  account_class: Type.Optional(Type.String({ maxLength: 18 })),
  account_status: Type.Optional(Type.String({ maxLength: 36 })),
  account_type: Type.Optional(Type.String({ maxLength: 18 })),
  account_login: Type.Optional(Type.String({ maxLength: 72 })),
  account_code: Type.Optional(Type.String({ maxLength: 30 })),
  account_full: Type.Optional(Type.String({ maxLength: 72 })),
  account_email: Type.Optional(Type.String({ maxLength: 144, format: 'email' })),
  account_phone: Type.Optional(Type.String({ maxLength: 18 })),
  account_zip: Type.Optional(Type.String({ maxLength: 18 })),
  account_photo: Type.Optional(Type.String()),
  account_hash: Type.Optional(Type.String()),
  account_crypt: Type.Optional(Type.String({ maxLength: 56 })),
  account_lat: Type.Optional(Type.Number()),
  account_lon: Type.Optional(Type.Number()),
  account_nonce: Type.Optional(Type.Integer()),
  account_dob: Type.Optional(Type.String()),
  account_createdon: Type.Optional(Type.String()),
  account_updatedon: Type.Optional(Type.String())
}, { $id: 'Account', additionalProperties: false });

export type AccountType = Static<typeof AccountsSchema>;