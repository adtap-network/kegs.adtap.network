import { Row, RowInterface} from "bns.adtap.network";
import { AccountFieldsSchema } from '../schemas/account-fields';

class AccountFieldRow extends Row implements RowInterface {

    field_id: string            =   "";
    field_class: string         =   "";
    field_type: string          =   "";
    field_key: string           =   "";
    field_label: string         =   "";
    field_sort: number          =   0;

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountFieldsSchema.validate(input);
        return validation;
    }

}
export default AccountFieldRow;