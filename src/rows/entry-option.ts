import Row from '../row';
import RowInterface from '../interfaces/row';
import { EntryOptionsSchema } from '../schemas/entry-options';

export class EntryOptionRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryOptionsSchema.validate(input);
        return validation;
    }

}