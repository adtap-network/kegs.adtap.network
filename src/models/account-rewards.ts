import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountRewardsSchema } from '../schemas/account-rewards';
import AccountRewardsCols from '../columns/account-rewards';

class AccountRewardsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_rewards',
            '',
            'a',
            AccountRewardsSchema,
            new AccountRewardsCols()
        );
    }
    
}
export default AccountRewardsModel;