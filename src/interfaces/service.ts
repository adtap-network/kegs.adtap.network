import BaseInterface from './base';
import ParamsInterface from './params';

export default interface ServiceInterface extends BaseInterface {

    deleteRecord(id: string): {[key: string]: any};

    getRecord(id: string): {[key: string]: any};

    listRecords(): {[key: string]: any};

    listByParams(params: ParamsInterface): {[key: string]: any};

    newRecord(params: ParamsInterface): {[key: string]: any};

    saveRecord(params: ParamsInterface): {[key: string]: any};

    searchRecords(params: ParamsInterface): {[key: string]: any};

}