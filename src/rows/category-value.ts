import Row from '../row';
import RowInterface from '../interfaces/row';
import { CategoryValuesSchema } from '../schemas/category-values';

export class CategoryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = CategoryValuesSchema.validate(input);
        return validation;
    }

}
