import Row from '../row';
import RowInterface from '../interfaces/row';
import { OffersSchema } from '../schemas/offers';

export class OfferRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OffersSchema.validate(input);
        return validation;
    }

}