import BeanInterface from './bean';
import ColumnsInterface from './columns';

export default interface ModelInterface extends BeanInterface {
    schema: object;
    table: string;
    prefix: string;
    alias: string;
    cols: ColumnsInterface;
}