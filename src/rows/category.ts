import { Row, RowInterface} from "bns.adtap.network";
import { CategoriesSchema } from '../schemas/categories';

export class CategoryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = CategoriesSchema.validate(input);
        return validation;
    }

}
