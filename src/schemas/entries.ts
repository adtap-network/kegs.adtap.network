import { Type, Static } from '@sinclair/typebox';

export const EntriesSchema = Type.Object(
  {
    entry_id: Type.String({ format: 'uuid', maxLength: 36 }),
    entry_master: Type.String({ format: 'uuid', maxLength: 36 }),
    entry_parent: Type.String({ format: 'uuid', maxLength: 36 }),
    entry_owner: Type.String({ maxLength: 56 }),
    entry_class: Type.String({ maxLength: 18 }),
    entry_type: Type.String({ maxLength: 18 }),
    entry_format: Type.String({ maxLength: 18 }),
    entry_status: Type.String({ maxLength: 18 }),
    entry_title: Type.String({ maxLength: 180 }),
    entry_byline: Type.String({ maxLength: 360 }),
    entry_short: Type.String({ maxLength: 180 }),
    entry_author: Type.String({ maxLength: 180 }),
    entry_descr: Type.String(),
    entry_body: Type.String(),
    entry_thumb: Type.String(),
    entry_photo: Type.String(),
    entry_startson: Type.Optional(Type.String()),
    entry_endson: Type.Optional(Type.String()),
    entry_frequency: Type.Number(),
    entry_unit: Type.String({ maxLength: 18 }),
    entry_version: Type.Integer(),
    entry_createdon: Type.Optional(Type.String()),
    entry_updatedon: Type.Optional(Type.String())
  },
  { $id: 'entries', additionalProperties: false }
)
export type EntrieType = Static<typeof EntriesSchema>