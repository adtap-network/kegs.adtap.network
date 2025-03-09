import { Row, RowInterface} from "bns.adtap.network";
import { AccountIssuersSchema } from '../schemas/account-issuers';

export class AccountIssuserRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountIssuersSchema.validate(input);
        return validation;
    }

}
