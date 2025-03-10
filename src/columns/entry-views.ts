import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class EntryViewsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['view_id','view_entry','view_date','view_session','view_browser','view_ip','view_os','view_count','view_taps'];
        this.insert = ['view_id','view_entry','view_date','view_session','view_browser','view_ip','view_os','view_count','view_taps'];
        this.update = ['view_id','view_count','view_taps'];
        this.exact = ['view_id','view_entry','view_date','view_session','view_browser','view_ip','view_os','view_count','view_taps'];
        this.search = ['view_id','view_entry','view_date','view_session','view_browser','view_ip','view_os','view_count','view_taps'];

        this.guids = ['view_id','view_entry'];
        this.strings = ['view_session','view_browser','view_ip','view_os'];
        this.dates = ['view_date'];
        this.booleans = [];
        this.numbers = ['view_count','view_taps'];
        
        this.primary = 'view_id';
        this.sortcol = 'view_date';
        this.sortdir = 'desc';
        this.sortorder = 'view_date desc';
    }

}
export default EntryViewsCols;