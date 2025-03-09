import { Type, Static } from '@sinclair/typebox';

export const ZipcodesSchema = Type.Object(
  {
    zip_id: Type.String({ format: 'uuid', maxLength: 36 }),
    zip_code: Type.String(),
    zip_lat: Type.Number(),
    zip_lon: Type.Number(),
    zip_city: Type.String({ maxLength: 72 }),
    zip_state: Type.String({ maxLength: 18 }),
    zip_county: Type.String({ maxLength: 36 }),
    zip_military: Type.Boolean(),
    zip_timezone: Type.String({ maxLength: 72 })
  },
  { $id: 'Zipcodes', additionalProperties: false }
)
export type ZipcodesType = Static<typeof ZipcodesSchema>