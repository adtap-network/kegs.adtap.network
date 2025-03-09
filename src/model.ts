import { Bean, Columns, ModelInterface } from 'bns.adtap.network';

class CommonModel extends Bean implements ModelInterface {

    schema: object;
    table: string;
    prefix: string;
    alias: string;
    cols: Columns;

    constructor(table: string, prefix: string, alias: string, schema: object, cols: Columns) {
        super({})
        this.schema = schema;
        this.table = table;
        this.prefix = prefix;
        this.alias = alias;
        this.cols = cols;
    }    
}
export default CommonModel;