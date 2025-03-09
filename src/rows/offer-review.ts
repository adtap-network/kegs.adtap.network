import Row from '../row';
import RowInterface from '../interfaces/row';
import { OfferReviewsSchema } from '../schemas/offer-reviews';

export default class OfferReviewRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferReviewsSchema.validate(input);
        return validation;
    }

}