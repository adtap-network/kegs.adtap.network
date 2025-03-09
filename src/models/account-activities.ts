import Model from '../model';
import ModelInterface from '../interfaces/model';
import { AccountActivitiesSchema } from '../schemas/account-activities';
import AccountActivitiesCols from '../columns/account-activities';

class AccountActivitiesModel extends Model implements ModelInterface {

    constructor() { 
        super(
            'tblaccount_activities',
            '',
            'a',
            AccountActivitiesSchema,
            new AccountActivitiesCols()
        );
    }
    
}
export default AccountActivitiesModel;