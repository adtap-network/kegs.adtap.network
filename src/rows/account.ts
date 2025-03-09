import { Row } from "bns.adtap.network";
import { AccountsSchema } from '../schemas/accounts';

class AccountRow extends Row {

    id: string = '';
    class: string = 'individual';
    status: string = 'new';
    type: string = 'standard';
    login: string = '';
    code: string = '';
    full: string = '';
    email: string = '';
    phone: string = '';
    zip: string = '';
    photo: string = '';
    hash: string = '';
    crypt: string = '';
    lat: number = 0;
    lon: number = 0;
    nonce: number = 1;
    dob: string = '';
    createdon: string = '';
    updatedon: string = '';

    constructor(a: Record<string, any> = {}) { super(a); }

    getDataArray(): [string, any][] { return this.getPropertiesArray('account'); }

    validateInput(input: any): boolean {
        const validation = AccountsSchema.validate(input);
        return validation;
    }

}
export default AccountRow;