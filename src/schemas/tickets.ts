import { Type, Static } from '@sinclair/typebox';

export const TicketsSchema = Type.Object(
  {
    ticket_id: Type.String({ maxLength: 36 }),
    ticket_account: Type.String({ maxLength: 56 }),
    ticket_type: Type.String({ maxLength: 18 }),
    ticket_status: Type.String({ maxLength: 18 }),
    ticket_scope: Type.String({ maxLength: 36 }),
    ticket_severity: Type.Integer(),
    ticket_number: Type.String({ maxLength: 18 }),
    ticket_text: Type.String(),
    ticket_assigned: Type.String({ maxLength: 56 }),
    ticket_browser: Type.String({ maxLength: 320 }),
    ticket_os: Type.String({ maxLength: 32 }),
    ticket_openedon: Type.String({ format: 'date-time' }),
    ticket_assigedon: Type.String({ format: 'date-time' }),
    ticket_closedon: Type.String({ format: 'date-time' })
  },
  { $id: 'Tickets', additionalProperties: false }
)
export type TicketsType = Static<typeof TicketsSchema>