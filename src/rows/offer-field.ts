import Row from '../row';
import RowInterface from '../interfaces/row';
import { OfferFieldsSchema } from '../schemas/offer-fields';

export class OfferFieldRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferFieldsSchema.validate(input);
        return validation;
    }

}