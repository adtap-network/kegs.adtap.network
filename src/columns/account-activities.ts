import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountActivitiesColumns extends Columns implements ColumnsInterface {
    constructor() {
        super();

        this.select = ['activity_id','activity_account','activity_type','activity_message','activity_date'];
        this.insert = ['activity_id','activity_account','activity_type','activity_message','activity_date'];
        this.update = ['activity_account','activity_type','activity_message','activity_date'];
        this.exact = ['activity_id','activity_account','activity_type','activity_message','activity_date'];
        this.search = ['activity_id','activity_account','activity_type','activity_message','activity_date'];
        
        this.guids = ['activity_id'];
        this.strings = ['activity_account','activity_type','activity_message'];
        this.dates = ['activity_date'];
        
        this.primary = 'activity_id';
        this.sortcol = 'activity_date';
        this.sortdir = 'desc';
        this.sortorder = 'activity_date desc';
    }
}
export default AccountActivitiesColumns;