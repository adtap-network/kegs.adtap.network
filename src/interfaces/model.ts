import { ColumnsInterface } from './columns';

export interface ModelInterface {
    schema: object;
    table: string;
    prefix: string;
    alias: string;
    cols: ColumnsInterface;
}