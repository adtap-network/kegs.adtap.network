import { Row, RowInterface } from "bns.adtap.network";
import { OfferKeywordsSchema } from '../schemas/offer-keywords';

export class OfferKeywordRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferKeywordsSchema.validate(input);
        return validation;
    }

}