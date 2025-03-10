import Row from '../row';
import RowInterface from '../interfaces/row';
import { CategoriesSchema } from '../schemas/categories';

class CategoryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = CategoriesSchema.validate(input);
        return validation;
    }

}
export default CategoryRow;