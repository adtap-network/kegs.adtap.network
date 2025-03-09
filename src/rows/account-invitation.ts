import { Row, RowInterface} from "bns.adtap.network";
import { AccountInvitationsSchema } from '../schemas/account-invitations';

class AccountInvitationRow extends Row implements RowInterface {

    invite_id: string           =   "";
    invite_account: string      =   "";
    invite_class: string        =   "";
    invite_status: string       =   "";
    invite_type: string         =   "";
    invite_login: string        =   "";
    invite_code: string         =   "";
    invite_full: string         =   "";
    invite_email: string        =   "";
    invite_phone: string        =   "";
    invite_zip: string          =   "";
    invite_hash: string         =   "";
    invite_nonce: number        =   0;
    invite_dob: string          =   "";
    invite_createdon: string    =   "";
    invite_updatedon: string    =   "";

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = AccountInvitationsSchema.validate(input);
        return validation;
    }

}
export default AccountInvitationRow;