import { Type, Static } from '@sinclair/typebox';

export const AccountRewardsSchema = Type.Object(
  {
    reward_id: Type.String({ maxLength: 36, format: 'uuid' }),
    reward_program: Type.String({ maxLength: 36, format: 'uuid' }),
    reward_account: Type.String({ maxLength: 56 }),
    reward_status: Type.String({ maxLength: 18 }),
    reward_enrolledon: Type.String({ format: 'date-time' })
  },
  { $id: 'AccountRewards', additionalProperties: false }
)
export type AccountRewardsType = Static<typeof AccountRewardsSchema>