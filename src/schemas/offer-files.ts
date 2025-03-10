import { Type, Static } from '@sinclair/typebox';

export const OfferFilesSchema = Type.Object(
  {
    file_id: Type.String({ format: 'uuid', maxLength: 36 }),
    file_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    file_name: Type.String({ maxLength: 252 }),
    file_type: Type.String({ maxLength: 18 }),
    file_ext: Type.String({ maxLength: 6 }),
    file_base64: Type.String(),
    file_path: Type.String(),
    file_size: Type.Number(),
    file_addedon: Type.String({ format: 'date-time' })
  },
  { $id: 'OfferFiles', additionalProperties: false }
)
export type OfferFilesType = Static<typeof OfferFilesSchema>