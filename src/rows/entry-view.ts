import Row from '../row';
import RowInterface from '../interfaces/row';
import { EntryViewsSchema } from '../schemas/entry-views';

export default class EntryViewRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryViewsSchema.validate(input);
        return validation;
    }

}