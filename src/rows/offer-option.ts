import Row from '../row';
import RowInterface from '../interfaces/row';
import { OfferOptionsSchema } from '../schemas/offer-options';

export default class OfferOptionRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferOptionsSchema.validate(input);
        return validation;
    }

}