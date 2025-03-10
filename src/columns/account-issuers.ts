import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountIssuersCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['issuer_id','issuer_account','issuer_domain','issuer_label','issuer_crypt','issuer_auth'];
        this.insert = ['issuer_id','issuer_account','issuer_domain','issuer_label','issuer_crypt','issuer_auth'];
        this.update = ['issuer_id','issuer_account','issuer_domain','issuer_label','issuer_crypt','issuer_auth'];
        this.exact = ['issuer_id','issuer_account','issuer_domain','issuer_label','issuer_crypt','issuer_auth'];
        this.search = ['issuer_id','issuer_account','issuer_domain','issuer_label','issuer_crypt','issuer_auth'];

        this.guids = ['issuer_id'];
        this.strings = ['issuer_account','issuer_domain','issuer_label','issuer_crypt'];
        this.dates = [];
        this.booleans = ['issuer_auth'];
        this.numbers = [];
        
        this.primary = 'issuer_id';
        this.sortcol = 'issuer_label';
        this.sortdir = 'asc';
        this.sortorder = 'issuer_label asc';
    }

}
export default AccountIssuersCols;