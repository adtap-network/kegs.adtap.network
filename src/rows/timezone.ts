import Row from '../row';
import RowInterface from '../interfaces/row';
import { TimezonesSchema } from '../schemas/timezones';

class TimezoneRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = TimezonesSchema.validate(input);
        return validation;
    }

}
export default TimezoneRow;