import { Type, Static } from '@sinclair/typebox';

export const CoinsSchema = Type.Object(
  {
    coin_id: Type.String({ maxLength: 72 }),
    coin_code: Type.String({ maxLength: 18 }),
    coin_issuer: Type.String({ maxLength: 56 }),
    coin_alpha: Type.String({ maxLength: 36 }),
    coin_name: Type.String({ maxLength: 72 }),
    coin_domain: Type.String({ maxLength: 360 }),
    coin_type: Type.String({ maxLength: 18 }),
    coin_status: Type.String({ maxLength: 18 }),
    coin_descr: Type.String(),
    coin_conditions: Type.String(),
    coin_redemption: Type.String(),
    coin_attestation: Type.String(),
    coin_image: Type.String(),
    coin_thumb: Type.String(),
    coin_supply: Type.Number(),
    coin_min: Type.Number(),
    coin_max: Type.Number(),
    coin_liquidity: Type.Number(),
    coin_free: Type.Number(),
    coin_btc: Type.Number(),
    coin_eur: Type.Number(),
    coin_jpy: Type.Number(),
    coin_usd: Type.Number(),
    coin_xag: Type.Number(),
    coin_xau: Type.Number(),
    coin_xlm: Type.Number(),
    coin_rating: Type.Number(),
    coin_spread: Type.Number(),
    coin_yield: Type.Number(),
    coin_athorized: Type.Boolean(),
    coin_featued: Type.Boolean(),
    coin_updatedon: Type.String({ format: 'date-time' })
  },
  { $id: 'Coins', additionalProperties: false }
)
export type CoinsType = Static<typeof CoinsSchema>