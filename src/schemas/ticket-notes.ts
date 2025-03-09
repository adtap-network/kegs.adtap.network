import { Type, Static } from '@sinclair/typebox';

export const TicketNotesSchema = Type.Object(
  {
    note_id: Type.String({ format: 'uuid', maxLength: 36 }),
    note_ticket: Type.String({ format: 'uuid', maxLength: 36 }),
    note_account: Type.String({ maxLength: 56 }),
    note_addedon: Type.String({ format: 'date-time' }),
    note_text: Type.String()
  },
  { $id: 'TicketNotes', additionalProperties: false }
)
export type TicketNotesType = Static<typeof TicketNotesSchema>