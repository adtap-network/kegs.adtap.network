import Row from '../row';
import RowInterface from '../interfaces/row';
import { MessageAttachmentsSchema } from '../schemas/message-attachments';

export default class MessageAttachmentRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('attach'); }

    validateInput(input: any): boolean {
        const validation = MessageAttachmentsSchema.validate(input);
        return validation;
    }

}