import { Type, Static } from '@sinclair/typebox';

export const AccountActivitiesSchema = Type.Object(
  {
    activity_id: Type.String({ format: 'uuid' }),
    activity_account: Type.String({ maxLength: 56 }),
    activity_type: Type.String({ maxLength: 18 }),
    activity_message: Type.String(),
    activity_date: Type.String({ format: 'date-time' })
  },
  { $id: 'AccountActivities', additionalProperties: false }
);

export type AccountActivitiesType = Static<typeof AccountActivitiesSchema>;


