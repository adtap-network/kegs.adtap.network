import BaseInterface from './base';

export default interface RowInterface extends BaseInterface {
    [key: string]: any;

    getDataArray(): [string, any][];

    getPropertiesArray(prefix: string): [string, any][];

    getRowArray(): [string, any][];

    validateInput(input: any): boolean;

} 