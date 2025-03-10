import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class CountriesCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        this.select = ['country_id','country_name','country_number','country_iso2','country_iso3','country_phone'];
        this.insert = ['country_id','country_name','country_number','country_iso2','country_iso3','country_phone'];
        this.update = ['country_id','country_name','country_number','country_iso2','country_iso3','country_phone'];
        this.exact = ['country_id','country_name','country_number','country_iso2','country_iso3','country_phone'];
        this.search = ['country_id','country_name','country_number','country_iso2','country_iso3','country_phone'];

        this.guids = ['country_id'];
        this.strings = ['country_name','country_number','country_iso2','country_iso3','country_phone'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'country_id';
        this.sortcol = 'country_iso2';
        this.sortdir = 'asc';
        this.sortorder = 'country_iso2 asc';
    }
}
export default CountriesCols;