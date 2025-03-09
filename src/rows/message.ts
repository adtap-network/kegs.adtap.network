import { Row, RowInterface} from "bns.adtap.network";
import { MessagesSchema } from '../schemas/messages';

export class MessageRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = MessagesSchema.validate(input);
        return validation;
    }

}