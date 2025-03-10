import Row from '../row';
import RowInterface from '../interfaces/row';
import { AccountOptionsSchema } from '../schemas/account-options';

class AccountOptionRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountOptionsSchema.validate(input);
        return validation;
    }

}
export default AccountOptionRow;