import Row from '../row';
import RowInterface from '../interfaces/row';
import { EntryCategoriesSchema } from '../schemas/entry-categories';

export default class EntryCategoryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryCategoriesSchema.validate(input);
        return validation;
    }

}