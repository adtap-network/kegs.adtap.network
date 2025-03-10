import { Type, Static } from '@sinclair/typebox';

export const OfferViewsSchema = Type.Object(
  {
    view_id: Type.String({ format: 'uuid', maxLength: 36 }),
    view_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    view_account: Type.String({ maxLength: 56 }),
    view_date: Type.String({ format: 'date-time' }),
    view_session: Type.String({ maxLength: 64 }),
    view_browser: Type.String({ maxLength: 320 }),
    view_ip: Type.String({ maxLength: 18 }),
    view_os: Type.String({ maxLength: 32 }),
    view_count: Type.Number(),
    view_taps: Type.Number()
  },
  { $id: 'OfferViews', additionalProperties: false }
)
export type OfferViewsType = Static<typeof OfferViewsSchema>