import Bean from './bean';
import Columns from './columns';
import ModelInterface from './interfaces/model'; 
import SchemaInterface from './interfaces/schema';

class Model extends Bean implements ModelInterface {

    schema: SchemaInterface;
    table: string;
    prefix: string;
    alias: string;
    cols: Columns;

    constructor(table: string, prefix: string, alias: string, schema: SchemaInterface, cols: Columns) {
        super({})
        this.schema = schema;
        this.table = table;
        this.prefix = prefix;
        this.alias = alias;
        this.cols = cols;
    }    
}
export default Model;