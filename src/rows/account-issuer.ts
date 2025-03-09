import Row from '../row';
import RowInterface from '../interfaces/row';
import { AccountIssuersSchema } from '../schemas/account-issuers';

class AccountIssuerRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountIssuersSchema.validate(input);
        return validation;
    }

}
export default AccountIssuerRow;