import { Type, Static } from '@sinclair/typebox';

export const TimezonesSchema = Type.Object(
  {
    tz_id: Type.String({ format: 'uuid' }),
    tz_code: Type.String({ maxLength: 18 }),
    tz_name: Type.String({ maxLength: 180 }),
    tz_utc: Type.String({ maxLength: 8 })
  },
  { $id: 'Timezones', additionalProperties: false }
)
export type TimezonesType = Static<typeof TimezonesSchema>