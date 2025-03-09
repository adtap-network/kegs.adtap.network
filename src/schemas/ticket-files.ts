import { Type, Static } from '@sinclair/typebox';

export const TicketFilesSchema = Type.Object(
  {
    file_id: Type.String({ format: 'uuid', maxLength: 36 }),
    file_account: Type.String({ maxLength: 56 }),
    file_ticket: Type.String({ format: 'uuid', maxLength: 36 }),
    file_name: Type.String({ maxLength: 252 }),
    file_type: Type.String({ maxLength: 18 }),
    file_ext: Type.String({ maxLength: 6 }),
    file_base64: Type.String(),
    file_path: Type.String(),
    file_size: Type.Integer(),
    file_addedon: Type.String({ format: 'date-time' })
  },
  { $id: 'TicketFiles', additionalProperties: false }
)
export type TicketFilesType = Static<typeof TicketFilesSchema>