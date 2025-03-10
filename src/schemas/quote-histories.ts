import { Type, Static } from '@sinclair/typebox';

export const QuoteHistoriesSchema = Type.Object(
  {
    hist_id: Type.String({ format: 'uuid', maxLength: 36 }),
    hist_quote: Type.String({ format: 'uuid', maxLength: 36 }),
    hist_xlm: Type.Number(),
    hist_usd: Type.Number(),
    hist_eur: Type.Number(),
    hist_jpy: Type.Number(),
    hist_xau: Type.Number(),
    hist_xag: Type.Number(),
    hist_btc: Type.Number(),
    hist_updatedon: Type.String({ format: 'date-time' })
  },
  { $id: 'QuoteHistories', additionalProperties: false }
)
export type QuoteHistoriesType = Static<typeof QuoteHistoriesSchema>