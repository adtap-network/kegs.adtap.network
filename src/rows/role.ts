import Row from '../row';
import RowInterface from '../interfaces/row';
import { RolesSchema } from '../schemas/roles';

class RoleRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = RolesSchema.validate(input);
        return validation;
    }

}
export default RoleRow;