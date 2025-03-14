import BaseInterface from './base';
import ColumnsInterface from './columns';
import RowInterface from './row';

export default interface ModelInterface extends BaseInterface {
    schema: {[key: string]:any};
    table: string;
    prefix: string;
    alias: string;
    cols: ColumnsInterface;
    row: RowInterface;
}