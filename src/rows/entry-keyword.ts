import Row from '../row';
import RowInterface from '../interfaces/row';
import { EntryKeywordsSchema } from '../schemas/entry-keywords';

export default class EntryKeywordRow extends Row implements RowInterface {
    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryKeywordsSchema.validate(input);
        return validation;
    }

}