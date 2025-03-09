import { Type, Static } from '@sinclair/typebox';

export const AccountBalancesSchema = Type.Object(
  {
    balance_id: Type.String({ format: 'uuid' }),
    balance_account: Type.String({ maxLength: 56 }),
    balance_reward: Type.String({ maxLength: 72 }),
    balance_action: Type.String({ maxLength: 18 }),
    balance_memo: Type.String(),
    balance_amount: Type.Number(),
    balance_total: Type.Number(),
    balance_date: Type.String({ format: 'date-time' })
  },
  { $id: 'AccountBalances', additionalProperties: false }
)
export type AccountBalancesType = Static<typeof AccountBalancesSchema>