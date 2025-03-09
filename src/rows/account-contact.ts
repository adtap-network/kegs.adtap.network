import { Row, RowInterface} from "bns.adtap.network";
import { AccountContactsSchema } from '../schemas/account-contacts';

class AccountContactRow extends Row implements RowInterface {

    contact_id: string          =   "";
    contact_account: string     =   "";
    contact_target: string      =   "";

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountContactsSchema.validate(input);
        return validation;
    }

}
export default AccountContactRow;