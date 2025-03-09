export default interface ServiceInterface {

    deleteRecord(id: string): {[key: string]: any};

    getRecord(id: string): {[key: string]: any};

    listRecords(): {[key: string]: any};

    listByParams(params: {[key: string]: any}): {[key: string]: any};

    newRecord(params: {[key: string]: any}): {[key: string]: any};

    saveRecord(params: {[key: string]: any}): {[key: string]: any};

    searchRecords(params: {[key: string]: any}): {[key: string]: any};

}