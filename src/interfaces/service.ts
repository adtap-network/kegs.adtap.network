export default interface ServiceInterface {

    deleteRecord(id: string): object;

    getRecord(id: string): object;

    listRecords(): object;

    listByParams(params: object): object;

    newRecord(params: object): object;

    saveRecord(params: object): object;

    searchRecords(params: object): object;

}