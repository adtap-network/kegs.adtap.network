import { Row, RowInterface} from "bns.adtap.network";
import { AccountPermsSchema } from '../schemas/account-perms';

export class EntryOptionOfferValue extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountPermsSchema.validate(input);
        return validation;
    }

}