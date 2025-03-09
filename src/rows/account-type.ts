import { Row, RowInterface} from "bns.adtap.network";
import { AccountTypesSchema } from '../schemas/account-types';

export class AccountType extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountTypesSchema.validate(input);
        return validation;
    }

}