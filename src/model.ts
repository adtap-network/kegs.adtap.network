import Base from './base';
import ColumnsInterface from './interfaces/columns';
import ModelInterface from './interfaces/model'; 
import SchemaInterface from './interfaces/schema';

class Model extends Base implements ModelInterface {

    schema: SchemaInterface;
    table: string;
    prefix: string;
    alias: string;
    cols: ColumnsInterface;

    constructor(table: string, prefix: string, alias: string, schema: SchemaInterface, cols: ColumnsInterface) {
        super({})
        this.schema = schema;
        this.table = table;
        this.prefix = prefix;
        this.alias = alias;
        this.cols = cols;
    }    
}
export default Model;