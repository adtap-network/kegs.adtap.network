import { Type, Static } from '@sinclair/typebox';

export const CountriesSchema = Type.Object(
  {
    country_id: Type.String({ format: 'uuid', maxLength: 36 }),
    country_name: Type.String({ maxLength: 180 }),
    country_number: Type.Integer(),
    country_iso2: Type.String({ maxLength: 2 }),
    country_iso3: Type.String({ maxLength: 3 }),
    country_phone: Type.String({ maxLength: 3 })
  },
  { $id: 'Countries', additionalProperties: false }
)
export type CountriesType = Static<typeof CountriesSchema>