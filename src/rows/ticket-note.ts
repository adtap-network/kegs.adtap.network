import Row from '../row';
import RowInterface from '../interfaces/row';
import { TicketNotesSchema } from '../schemas/ticket-notes';

class TicketNoteRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = TicketNotesSchema.validate(input);
        return validation;
    }

}
export default TicketNoteRow;