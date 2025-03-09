import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class MessageAttachmentsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();

        this.select = ['attach_id','attach_message','attach_name','attach_type','attach_ext','attach_code','attach_base64','attach_path','attach_size'];
        this.insert = ['attach_id','attach_message','attach_name','attach_type','attach_ext','attach_code','attach_base64','attach_path','attach_size'];
        this.update = ['attach_id','attach_message','attach_name','attach_type','attach_ext','attach_code','attach_base64','attach_path','attach_size'];
        this.exact = ['attach_id','attach_name','attach_type','attach_ext','attach_code','attach_base64','attach_path','attach_size'];
        this.search = ['attach_id','attach_message','attach_name','attach_type','attach_ext','attach_code','attach_base64','attach_path','attach_size'];

        this.guids = ['attach_id'];
        this.strings = ['attach_message','attach_name','attach_type','attach_ext','attach_code','attach_base64','attach_path'];
        this.dates = [];
        this.booleans = [];
        this.numbers = ['attach_size'];
        
        this.primary = 'attach_id';
        this.sortcol = 'attach_name';
        this.sortdir = 'asc';
        this.sortorder = 'attach_name asc';
    }

}
export default MessageAttachmentsCols;

