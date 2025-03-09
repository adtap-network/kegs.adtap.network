import { Row, RowInterface} from "bns.adtap.network";
import { AccountOptionsSchema } from '../schemas/account-options';

export class EntryOptionOfferValue extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountOptionsSchema.validate(input);
        return validation;
    }

}
