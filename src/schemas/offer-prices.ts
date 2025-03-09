import { Type, Static } from '@sinclair/typebox';

export const OfferPricesSchema = Type.Object(
  {
    price_id: Type.String({ format: 'uuid', maxLength: 36 }),
    price_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    price_min: Type.Number(),
    price_max: Type.Number(),
    price_btc: Type.Number(),
    price_eur: Type.Number(),
    price_jpy: Type.Number(),
    price_usd: Type.Number(),
    price_xag: Type.Number(),
    price_xau: Type.Number(),
    price_xlm: Type.Number()
  },
  { $id: 'OfferPrices', additionalProperties: false }
)
export type OfferPricesType = Static<typeof OfferPricesSchema>