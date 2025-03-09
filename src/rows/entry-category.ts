import { Row, RowInterface } from "bns.adtap.network";
import { EntryCategoriesSchema } from '../schemas/entry-categories';

export class EntryCategoryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryCategoriesSchema.validate(input);
        return validation;
    }

}