import { Row, RowInterface } from "bns.adtap.network";
import { EntryFilesSchema } from '../schemas/entry-files';

export class EntryFileRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryFilesSchema.validate(input);
        return validation;
    }

}