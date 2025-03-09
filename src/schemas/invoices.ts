import { Type, Static } from '@sinclair/typebox';

export const InvoicesSchema = Type.Object(
  {
    invoice_id: Type.String({ format: 'uuid', maxLength: 36 }),
    invoice_account: Type.String({ maxLength: 56 }),
    invoice_customer: Type.String({ maxLength: 56 }),
    invoice_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    invoice_status: Type.String({ maxLength: 18 }),
    invoice_number: Type.String({ maxLength: 72 }),
    invoice_memo: Type.String({ maxLength: 72 }),
    invoice_terms: Type.String({ maxLength: 72 }),
    invoice_taxcode: Type.String({ maxLength: 36 }),
    invoice_tracking: Type.String(),
    invoice_qr: Type.String(),
    invoice_descr: Type.String(),
    invoice_subtotal: Type.Number(),
    invoice_tax: Type.Number(),
    invoice_shipping: Type.Number(),
    invoice_handling: Type.Number(),
    invoice_credit: Type.Number(),
    invoice_total: Type.Number(),
    invoice_paid: Type.Number(),
    invoice_senton: Type.String({ format: 'date-time' }),
    invoice_dueon: Type.String({ format: 'date-time' }),
    invoice_paidon: Type.String({ format: 'date-time' }),
    invoice_pickedon: Type.String({ format: 'date-time' }),
    invoice_packedon: Type.String({ format: 'date-time' }),
    invoice_shippedon: Type.String({ format: 'date-time' }),
    invoice_deliveredon: Type.String({ format: 'date-time' })
  },
  { $id: 'Invoices', additionalProperties: false }
)
export type InvoicesType = Static<typeof InvoicesSchema>