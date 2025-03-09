import { Type, Static } from '@sinclair/typebox';

export const MessagesSchema = Type.Object(
  {
    message_id: Type.String({ format: 'uuid', maxLength: 36 }),
    message_sender: Type.String({ maxLength: 56 }),
    message_recipient: Type.String({ maxLength: 56 }),
    message_date: Type.String({ format: 'date-time' }),
    message_type: Type.String({ maxLength: 18 }),
    message_to: Type.String({ maxLength: 144 }),
    message_from: Type.String({ maxLength: 144 }),
    message_subject: Type.String({ maxLength: 288 }),
    message_body: Type.String()
  },
  { $id: 'Messages', additionalProperties: false }
)
export type MessagesType = Static<typeof MessagesSchema>