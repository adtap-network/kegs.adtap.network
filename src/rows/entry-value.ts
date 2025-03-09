import { Row, RowInterface } from "bns.adtap.network";
import { EntryValuesSchema } from '../schemas/entry-values';

export class EntryValueRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryValuesSchema.validate(input);
        return validation;
    }

}