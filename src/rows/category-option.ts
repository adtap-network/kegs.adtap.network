import { Row, RowInterface } from "bns.adtap.network";
import { CategoryOptionsSchema } from '../schemas/category-options';

class CategortOptionRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = CategoryOptionsSchema.validate(input);
        return validation;
    }

}