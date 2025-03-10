import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class TimezonesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['tz_id','tz_code','tz_name','tz_utc'];
        this.insert = ['tz_id','tz_code','tz_name','tz_utc'];
        this.update = ['tz_id','tz_code','tz_name','tz_utc'];
        this.exact = ['tz_id','tz_code','tz_name','tz_utc'];
        this.search = ['tz_id','tz_code','tz_name','tz_utc'];

        this.guids = ['tz_id'];
        this.strings = ['tz_code','tz_name','tz_utc'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'tz_id';
        this.sortcol = 'tz_name';
        this.sortdir = 'asc';
        this.sortorder = 'tz_name asc';
    }

}
export default TimezonesCols;