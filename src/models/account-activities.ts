import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountActivitiesSchema } from '../schemas/account-activities';
import AccountActivitiesCols from '../columns/account-activities';

class AccountActivitiesModel extends CommonModel implements CommonModelInterface {

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