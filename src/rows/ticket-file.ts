import Row from '../row';
import RowInterface from '../interfaces/row';
import { TicketFilesSchema } from '../schemas/ticket-files';

class TicketFileRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = TicketFilesSchema.validate(input);
        return validation;
    }

}
export default TicketFileRow;