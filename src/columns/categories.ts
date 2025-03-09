import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class CategoriesCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        this.select = ['category_id','category_root','category_parent','category_class','category_title','category_photo','category_descr','category_level','category_sort'];
        this.insert = ['category_id','category_root','category_parent','category_class','category_title','category_photo','category_descr','category_level','category_sort'];
        this.update = ['category_id','category_root','category_parent','category_class','category_title','category_photo','category_descr','category_level','category_sort'];
        this.exact = ['category_id','category_root','category_parent','category_class','category_title','category_photo','category_level','category_sort'];
        this.search = ['category_id','category_root','category_parent','category_class','category_title','category_photo','category_descr','category_level','category_sort'];

        this.guids = ['category_id','category_root','category_parent'];
        this.strings = ['category_class','category_title','category_photo','category_descr'];
        this.dates = [];
        this.booleans = [];
        this.numbers = ['category_level','category_sort'];
        
        this.primary = 'category_id';
        this.sortcol = 'category_sort';
        this.sortdir = 'asc';
        this.sortorder = 'category_sort asc';
    }
}
export default CategoriesCols;