import Row from '../row';
import RowInterface from '../interfaces/row';
import { EntryCommentsSchema } from '../schemas/entry-comments';

export default class EntryCommentRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryCommentsSchema.validate(input);
        return validation;
    }

}