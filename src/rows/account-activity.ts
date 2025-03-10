import Row from '../row';
import RowInterface from '../interfaces/row';
import { AccountActivitiesSchema } from '../schemas/account-activities';

class AccountActivityRow extends Row implements RowInterface {

    activity_id: string         = "";
    activity_account: string    = "";
    activity_type: string       = "";
    activity_message: string    = "";
    activity_date: string       = "";

    constructor(a: Record<string, any>) { super(a); }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountActivitiesSchema.validate(input);
        return validation;
    }

}

export default AccountActivityRow;