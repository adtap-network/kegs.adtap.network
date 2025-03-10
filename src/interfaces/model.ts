import BaseInterface from './base';
import ColumnsInterface from './columns';

export default interface ModelInterface extends BaseInterface {
    schema: object;
    table: string;
    prefix: string;
    alias: string;
    cols: ColumnsInterface;
}