import { Type, Static } from '@sinclair/typebox';

export const InvoicePaymentsSchema = Type.Object(
  {
    payment_id: Type.String({ format: 'uuid', maxLength: 36 }),
    payment_invoice: Type.String({ maxLength: 36 }),
    payment_account: Type.String({ maxLength: 56 }),
    payment_intent: Type.String({ maxLength: 56 }),
    payment_coin: Type.String({ maxLength: 72 }),
    payment_network: Type.String({ maxLength: 36 }),
    payment_status: Type.String({ maxLength: 36 }),
    payment_type: Type.String({ maxLength: 36 }),
    payment_action: Type.String({ maxLength: 36 }),
    payment_memo: Type.String(),
    payment_hash: Type.String({ maxLength: 255 }),
    payment_method: Type.String({ maxLength: 56 }),
    payment_currency: Type.String({ maxLength: 3 }),
    payment_confirmation: Type.String({ maxLength: 360 }),
    payment_amount: Type.Number(),
    payment_price: Type.Number(),
    payment_fee: Type.Number(),
    payment_gas: Type.Number(),
    payment_total: Type.Number(),
    payment_receive: Type.Number(),
    payment_rate: Type.Number(),
    payment_usd: Type.Number(),
    payment_btc: Type.Number(),
    payment_eur: Type.Number(),
    payment_jpy: Type.Number(),
    payment_xlm: Type.Number(),
    payment_xag: Type.Number(),
    payment_xau: Type.Number(),
    payment_date: Type.String({ format: 'date-time' }),
    payment_polledon: Type.String({ format: 'date-time' }),
    payment_updatedon: Type.String({ format: 'date-time' })
  },
  { $id: 'InvoicePayments', additionalProperties: false }
)
export type InvoicePaymentsType = Static<typeof InvoicePaymentsSchema>