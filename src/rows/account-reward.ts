import { Row, RowInterface} from "bns.adtap.network";
import { AccountRewardsSchema } from '../schemas/account-rewards';

export class EntryOptionOfferValue extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountRewardsSchema.validate(input);
        return validation;
    }

}