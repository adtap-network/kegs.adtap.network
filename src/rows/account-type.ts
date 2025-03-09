import Row from '../row';
import RowInterface from '../interfaces/row';
import { AccountTypesSchema } from '../schemas/account-types';

class AccountTypeRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountTypesSchema.validate(input);
        return validation;
    }

}
export default AccountTypeRow;