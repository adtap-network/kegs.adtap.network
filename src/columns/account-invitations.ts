import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountInvitationsCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        this.select = ['invite_id','invite_account','invite_class','invite_status','invite_type','invite_login','invite_code','invite_full','invite_email','invite_phone','invite_hash','invite_zip','invite_nonce','invite_dob','invite_createdon','invite_updatedon'];
        this.insert = ['invite_id','invite_account','invite_class','invite_status','invite_type','invite_login','invite_code','invite_full','invite_email','invite_phone','invite_hash','invite_zip','invite_nonce','invite_dob','invite_createdon','invite_updatedon'];
        this.update = ['invite_id','invite_account','invite_class','invite_status','invite_type','invite_login','invite_code','invite_full','invite_email','invite_phone','invite_hash','invite_zip','invite_nonce','invite_dob','invite_createdon','invite_updatedon'];
        this.exact = ['invite_id','invite_account','invite_class','invite_status','invite_type','invite_login','invite_code','invite_full','invite_email','invite_phone','invite_hash','invite_zip','invite_nonce','invite_dob','invite_createdon','invite_updatedon'];
        this.search = ['invite_id','invite_account','invite_class','invite_status','invite_type','invite_login','invite_code','invite_full','invite_email','invite_phone','invite_hash','invite_zip','invite_nonce','invite_dob','invite_createdon','invite_updatedon'];

        this.guids = ['invite_id'];
        this.strings = ['invite_account','invite_class','invite_status','invite_type','invite_login','invite_code','invite_full','invite_email','invite_phone','invite_hash','invite_zip'];
        this.dates = ['invite_dob','invite_createdon','invite_updatedon'];
        this.booleans = [];
        this.numbers = ['invite_nonce'];
        
        this.primary = 'invite_id';
        this.sortcol = 'invite_updatedon';
        this.sortdir = 'desc';
        this.sortorder = 'invite_updatedon desc';
    }
}
export default AccountInvitationsCols;

