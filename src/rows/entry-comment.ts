import { Row, RowInterface } from "bns.adtap.network";
import { EntryCommentsSchema } from '../schemas/entry-comments';

export class EntryCommentRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryCommentsSchema.validate(input);
        return validation;
    }

}