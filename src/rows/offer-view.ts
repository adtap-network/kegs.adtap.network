import { Row, RowInterface } from "bns.adtap.network";
import { OfferViewsSchema } from '../schemas/offer-views';

export class OfferViewRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferViewsSchema.validate(input);
        return validation;
    }

}