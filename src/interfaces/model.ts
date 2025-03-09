import { ColumnsInterface } from './columns';

interface CommonModelInterface {
    schema: object;
    table: string;
    prefix: string;
    alias: string;
    cols: ColumnsInterface;
}
export default CommonModelInterface;