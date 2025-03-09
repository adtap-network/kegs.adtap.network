import { Type, Static } from '@sinclair/typebox';

export const MessageAttachmentsSchema = Type.Object(
  {
    attach_id: Type.String({ format: 'uuid', maxLength: 36 }),
    attach_message: Type.String({ format: 'uuid', maxLength: 36 }),
    attach_name: Type.String({ maxLength: 252 }),
    attach_type: Type.String({ maxLength: 18 }),
    attach_ext: Type.String({ maxLength: 6 }),
    attach_cid: Type.String({ maxLength: 144 }),
    attach_base64: Type.String(),
    attach_path: Type.String(),
    attach_size: Type.Integer()
  },
  { $id: 'MessageAttachments', additionalProperties: false }
)
export type MessageAttachmentsType = Static<typeof MessageAttachmentsSchema>