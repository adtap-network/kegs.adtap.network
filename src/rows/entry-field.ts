import { Row, RowInterface } from "bns.adtap.network";
import { EntryFieldsSchema } from '../schemas/entry-fields';

export class EntryFieldRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryFieldsSchema.validate(input);
        return validation;
    }

}