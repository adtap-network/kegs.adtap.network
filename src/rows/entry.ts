import Row from '../row';
import RowInterface from '../interfaces/row';
import { EntriesSchema } from '../schemas/entries';

export default class EntryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntriesSchema.validate(input);
        return validation;
    }

}