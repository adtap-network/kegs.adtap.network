import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class EntriesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['entry_id','entry_master','entry_parent','entry_owner','entry_class','entry_type','entry_status','entry_format','entry_title','entry_byline','entry_short','entry_descr','entry_body','entry_author','entry_thumb','entry_photo','entry_startson','entry_endson','entry_frequency','entry_unit','entry_version','entry_createdon','entry_updatedon'];
        this.insert = ['entry_id','entry_master','entry_parent','entry_owner','entry_class','entry_type','entry_status','entry_format','entry_title','entry_byline','entry_short','entry_descr','entry_body','entry_author','entry_thumb','entry_photo','entry_startson','entry_endson','entry_frequency','entry_unit','entry_version','entry_createdon','entry_updatedon'];
        this.update = ['entry_id','entry_master','entry_parent','entry_owner','entry_class','entry_type','entry_status','entry_format','entry_title','entry_byline','entry_short','entry_descr','entry_body','entry_author','entry_thumb','entry_photo','entry_startson','entry_endson','entry_frequency','entry_unit','entry_version','entry_createdon','entry_updatedon'];
        this.exact = ['entry_id','entry_master','entry_parent','entry_owner','entry_class','entry_type','entry_status','entry_format','entry_title','entry_byline','entry_short','entry_body','entry_thumb','entry_photo','entry_startson','entry_endson','entry_frequency','entry_unit','entry_version','entry_createdon','entry_updatedon'];
        this.search = ['entry_id','entry_master','entry_parent','entry_owner','entry_class','entry_type','entry_status','entry_format','entry_title','entry_byline','entry_short','entry_descr','entry_body','entry_author','entry_thumb','entry_photo','entry_startson','entry_endson','entry_frequency','entry_unit','entry_version','entry_createdon','entry_updatedon'];

        this.guids = ['entry_id','entry_master','entry_parent'];
        this.strings = ['entry_owner','entry_class','entry_type','entry_status','entry_format','entry_title','entry_byline','entry_short','entry_descr','entry_body','entry_author','entry_thumb','entry_photo','entry_unit'];
        this.dates = ['entry_startson','entry_endson','entry_createdon','entry_updatedon'];
        this.booleans = [];
        this.numbers = ['entry_frequency','entry_version'];
        
        this.primary = 'entry_id';
        this.sortcol = 'entry_updatedon';
        this.sortdir = 'desc';
        this.sortorder = 'entry_updatedon desc';
    }

}
export default EntriesCols;