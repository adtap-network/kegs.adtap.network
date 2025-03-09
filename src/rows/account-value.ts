import { Row, RowInterface} from "bns.adtap.network";
import { AccountValuesSchema } from '../schemas/account-values';

export class AccountValue extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountValuesSchema.validate(input);
        return validation;
    }

}