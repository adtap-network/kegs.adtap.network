import Base from './base';
import ColumnsInterface from './interfaces/columns';
import ModelInterface from './interfaces/model'; 
import RowInterface from './interfaces/row';

class Model extends Base implements ModelInterface {
    
    table: string;
    prefix: string;
    alias: string;
    schema: {[key: string]:any};
    cols: ColumnsInterface;
    row: RowInterface;

    constructor(table: string, prefix: string, alias: string, schema: {[key: string]: any}, cols: ColumnsInterface, row: RowInterface) {
        super({})
        this.schema = schema;
        this.table = table;
        this.prefix = prefix;
        this.alias = alias;
        this.cols = cols;
        this.row = row;
    }    
}
export default Model;