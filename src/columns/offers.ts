import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OffersCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['offer_id','offer_account','offer_type','offer_status','offer_terms','offer_title','offer_code','offer_slug','offer_descr','offer_photo'];
        this.insert = ['offer_id','offer_account','offer_type','offer_status','offer_terms','offer_title','offer_code','offer_slug','offer_descr','offer_photo'];
        this.update = ['offer_id','offer_account','offer_type','offer_status','offer_terms','offer_title','offer_code','offer_slug','offer_descr','offer_photo'];
        this.exact = ['offer_id','offer_account','offer_type','offer_status','offer_terms','offer_title','offer_code','offer_slug','offer_photo'];
        this.search = ['offer_id','offer_account','offer_type','offer_status','offer_terms','offer_title','offer_code','offer_slug','offer_descr','offer_photo'];

        this.guids = ['offer_id'];
        this.strings = ['offer_account','offer_type','offer_status','offer_terms','offer_title','offer_code','offer_slug','offer_descr','offer_photo'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'offer_id';
        this.sortcol = 'offer_title';
        this.sortdir = 'asc';
        this.sortorder = 'offer_title asc';
    }

}
export default OffersCols;