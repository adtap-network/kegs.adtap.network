import { Type, Static } from '@sinclair/typebox';

export const AccountIssuersSchema = Type.Object(
  {
    issuer_id: Type.String({ maxLength: 56 }),
    issuer_account: Type.String({ maxLength: 56 }),
    issuer_domain: Type.String({ maxLength: 360 }),
    issuer_label: Type.String({ maxLength: 18 }),
    issuer_crypt: Type.String(),
    issuer_auth: Type.Boolean()
  },
  { $id: 'AccountIssuers', additionalProperties: false }
)
export type AccountIssuersType = Static<typeof AccountIssuersSchema>