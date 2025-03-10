import Row from '../row';
import RowInterface from '../interfaces/row';
import { AccountRewardsSchema } from '../schemas/account-rewards';

class AccountRewardRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountRewardsSchema.validate(input);
        return validation;
    }

}
export default AccountRewardRow;