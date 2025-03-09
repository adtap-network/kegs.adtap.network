import { Row, RowInterface } from "bns.adtap.network";
import { EntryViewsSchema } from '../schemas/entry-views';

export class EntryViewRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryViewsSchema.validate(input);
        return validation;
    }

}