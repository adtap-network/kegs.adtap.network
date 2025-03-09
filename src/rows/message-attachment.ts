import { Row, RowInterface } from "bns.adtap.network";
import { MessageAttachmentsSchema } from '../schemas/message-attachments';

export class MessageAttachmentRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('attach'); }

    validateInput(input: any): boolean {
        const validation = MessageAttachmentsSchema.validate(input);
        return validation;
    }

}