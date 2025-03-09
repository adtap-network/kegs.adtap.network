import { Row, RowInterface} from "bns.adtap.network";
import { EntriesSchema } from '../schemas/entries';

export class EntryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntriesSchema.validate(input);
        return validation;
    }

}