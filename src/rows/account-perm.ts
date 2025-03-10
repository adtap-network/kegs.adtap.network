import Row from '../row';
import RowInterface from '../interfaces/row';
import { AccountPermsSchema } from '../schemas/account-perms';

class AccountPermRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountPermsSchema.validate(input);
        return validation;
    }

}
export default AccountPermRow;