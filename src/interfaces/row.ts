export default interface RowInterface {
    [key: string]: any;

    getDataArray(): [string, any][];

    getPropertiesArray(prefix: string): [string, any][];

    getRowArray(): [string, any][];

    validateInput(input: any): boolean;

} 