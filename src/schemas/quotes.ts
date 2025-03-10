import { Type, Static } from '@sinclair/typebox';

export const QuotesSchema = Type.Object(
  {
    quote_id: Type.String({ format: 'uuid', maxLength: 36 }),
    quote_xlm: Type.Number(),
    quote_usd: Type.Number(),
    quote_eur: Type.Number(),
    quote_jpy: Type.Number(),
    quote_xau: Type.Number(),
    quote_xag: Type.Number(),
    quote_btc: Type.Number(),
    quote_updatedon: Type.String({ format: 'date-time' })
  },
  { $id: 'Quotes', additionalProperties: false }
)
export type QuotesType = Static<typeof QuotesSchema>