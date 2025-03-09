import { Row, RowInterface } from "bns.adtap.network";
import { CategoryFieldsSchema } from '../schemas/category-fields';

export class CategoryFieldRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = CategoryFieldsSchema.validate(input);
        return validation;
    }

}