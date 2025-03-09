import BeanInterface from './bean';

export default interface RowInterface extends BeanInterface {
    [key: string]: any;

    getDataArray(): [string, any][];

    getPropertiesArray(prefix: string): [string, any][];

    getRowArray(): [string, any][];

    validateInput(input: any): boolean;

} 