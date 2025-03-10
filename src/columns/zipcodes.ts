import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class ZipCodesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['zip_id','zip_code','zip_city','zip_state','zip_county','zip_timezone','zip_military','zip_lat','zip_lon'];
        this.insert = ['zip_id','zip_code','zip_city','zip_state','zip_county','zip_timezone','zip_military','zip_lat','zip_lon'];
        this.update = ['zip_id','zip_code','zip_city','zip_state','zip_county','zip_timezone','zip_military','zip_lat','zip_lon'];
        this.exact = ['zip_id','zip_code','zip_city','zip_state','zip_county','zip_timezone','zip_military','zip_lat','zip_lon'];
        this.search = ['zip_id','zip_code','zip_city','zip_state','zip_county','zip_timezone','zip_military','zip_lat','zip_lon'];

        this.guids = ['zip_id'];
        this.strings = ['zip_code','zip_city','zip_state','zip_county','zip_timezone'];
        this.dates = [];
        this.booleans = ['zip_military'];
        this.numbers = ['zip_lat','zip_lon'];
        
        this.primary = 'zip_id';
        this.sortcol = 'zip_city';
        this.sortdir = 'asc';
        this.sortorder = 'zip_city asc';
    }

}
export default ZipCodesCols;