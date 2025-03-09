import { Row, RowInterface } from "bns.adtap.network";
import { EntryKeywordsSchema } from '../schemas/entry-keywords';

export class EntryKeywordRow extends Row implements RowInterface {
    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryKeywordsSchema.validate(input);
        return validation;
    }

}