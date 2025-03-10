import { Type, Static } from '@sinclair/typebox';

export const InvoiceLinesSchema = Type.Object(
  {
    line_id: Type.String({ format: 'uuid', maxLength: 36 }),
    line_invoice: Type.String({ format: 'uuid', maxLength: 36 }),
    line_offer: Type.String({ format: 'uuid', maxLength: 36 }),
    line_type: Type.String({ maxLength: 18 }),
    line_sku: Type.String({ maxLength: 144 }),
    line_qty: Type.Number(),
    line_each: Type.Number(),
    line_ext: Type.Number(),
    line_number: Type.Integer(),
    line_addedon: Type.String({ format: 'date-time' })
  },
  { $id: 'InvoiceLines', additionalProperties: false }
)
export type InvoiceLinesType = Static<typeof InvoiceLinesSchema>