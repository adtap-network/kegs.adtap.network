import { Row, RowInterface} from "bns.adtap.network";
import { AccountBalancesSchema } from '../schemas/account-balances';

class AccountBalanceRow extends Row implements RowInterface {

    balance_id: string      =   "";
    balance_account: string =   "";
    balance_reward: string  =   "";
    balance_action: string  =   "";
    balance_memo: string    =   "";
    balance_amount: number  =   0;
    balance_total: number   =   0;
    balance_date: string    =   "";

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountBalancesSchema.validate(input);
        return validation;
    }

}
export default AccountBalanceRow;