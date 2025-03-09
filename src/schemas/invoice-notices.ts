import { Type, Static } from '@sinclair/typebox';

export const InvoiceNoticesSchema = Type.Object(
  {
    notice_id: Type.String({ format: 'uuid', maxLength: 36}),
    notice_invoice: Type.String({ format: 'uuid', maxLength: 36}),
    notice_sender: Type.String({ maxLength: 56 }),
    notice_recipient: Type.String({ maxLength: 56 }),
    notice_status: Type.String({ maxLength: 18 }),
    notice_name: Type.String({ maxLength: 72 }),
    notice_from: Type.String({ maxLength: 288 }),
    notice_to: Type.String({ maxLength: 288 }),
    notice_phone: Type.String({ maxLength: 36 }),
    notice_subject: Type.String({ maxLength: 360 }),
    notice_body: Type.String(),
    notice_attach: Type.String(),
    notice_senton: Type.String({ format: 'date-time' }),
    notice_readon: Type.String({ format: 'date-time' })
  },
  { $id: 'InvoiceNotices', additionalProperties: false }
)
export type InvoiceNoticesType = Static<typeof InvoiceNoticesSchema>