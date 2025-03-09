import { Row, RowInterface } from "bns.adtap.network";
import { OfferCategoriesSchema } from '../schemas/offer-categories';

class OfferCategoryOfferValue extends CommonOfferValue implements CommonOfferValueInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferCategoriesSchema.validate(input);
        return validation;
    }

}
export default OfferCategoryOfferValue;