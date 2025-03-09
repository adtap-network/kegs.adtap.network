import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OfferFilesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['file_id','file_offer','file_name','file_type','file_ext','file_base64','file_path','file_size','file_addedon'];
        this.insert = ['file_id','file_offer','file_name','file_type','file_ext','file_base64','file_path','file_size','file_addedon'];
        this.update = ['file_id','file_offer','file_name','file_type','file_ext','file_base64','file_path','file_size','file_addedon'];
        this.exact = ['file_id','file_offer','file_name','file_type','file_ext','file_base64','file_path','file_size','file_addedon'];
        this.search = ['file_id','file_offer','file_name','file_type','file_ext','file_base64','file_path','file_size','file_addedon'];

        this.guids = ['file_id','file_offer'];
        this.strings = ['file_name','file_type','file_ext','file_base64','file_path'];
        this.dates = ['file_addedon'];
        this.booleans = [];
        this.numbers = ['file_size'];
        
        this.primary = 'file_id';
        this.sortcol = 'file_addedon';
        this.sortdir = 'desc';
        this.sortorder = 'file_addedon desc';
    }

}
export default OfferFilesCols;