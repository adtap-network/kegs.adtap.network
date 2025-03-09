import ColumnsInterface from './columns';

export default interface ModelInterface {
    schema: object;
    table: string;
    prefix: string;
    alias: string;
    cols: ColumnsInterface;
}