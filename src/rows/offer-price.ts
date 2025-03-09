import Row from '../row';
import RowInterface from '../interfaces/row';
import { OfferPricesSchema } from '../schemas/offer-prices';

export class OfferPriceRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferPricesSchema.validate(input);
        return validation;
    }

}