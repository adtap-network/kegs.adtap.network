import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class RolesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['role_id','role_class','role_name','role_label','role_level'];
        this.insert = ['role_id','role_class','role_name','role_label','role_level'];
        this.update = ['role_id','role_class','role_name','role_label','role_level'];
        this.exact = ['role_id','role_class','role_name','role_label','role_level'];
        this.search = ['role_id','role_class','role_name','role_label','role_level'];

        this.guids = ['role_id'];
        this.strings = ['role_class','role_name','role_label'];
        this.dates = [];
        this.booleans = [];
        this.numbers = ['role_level'];
        
        this.primary = 'role_id';
        this.sortcol = 'role_level';
        this.sortdir = 'asc';
        this.sortorder = 'role_level asc';
    }

}
export default RolesCols;