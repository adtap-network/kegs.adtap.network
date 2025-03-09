import { Row, RowInterface} from "bns.adtap.network";
import { ZipcodesSchema } from '../schemas/zipcodes';

class ZipcodeRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = ZipcodesSchema.validate(input);
        return validation;
    }

}
export default ZipcodeRow;