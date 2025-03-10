import Row from '../row';
import RowInterface from '../interfaces/row';
import { OfferCategoriesSchema } from '../schemas/offer-categories';

class OfferCategoryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferCategoriesSchema.validate(input);
        return validation;
    }

}
export default OfferCategoryRow;