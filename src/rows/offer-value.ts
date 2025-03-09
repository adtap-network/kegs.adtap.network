import Row from '../row';
import RowInterface from '../interfaces/row';
import { OfferValuesSchema } from '../schemas/offer-values';

export class OfferValueRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferValuesSchema.validate(input);
        return validation;
    }

}