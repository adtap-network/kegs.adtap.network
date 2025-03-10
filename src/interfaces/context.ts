import BaseInterface from './base';
import ErrorsInterface from './errors';
import FiltersInterface from "./filters";
import IntervalsInterface from '../interfaces/intervals';
import JsonInterface from "./json";
import MessageInterface from "./message";
import ParamsInterface from "./params";
import RouteInterface from "./route";
import EndPointInterface from "./endpoint";

export default interface ContextInterface extends BaseInterface {

    datastore: string;
    domain: string;
    federation: string;
    fetchedon: string;
    folder: string;
    ip: string;
    landing: string;
    modekey: string;
    pubkey: string;
    ps: string;
    reference: string;
    root: string;
    updatedon: string;
    url: string;
    attempted: string;
    content: string;
    deciphered: string;

    buffer: number;
    fee: number;
    port: number;

    curate: boolean;
    debug: boolean;
    logvisit: boolean;
    maintenance: boolean;
    pci: boolean;

    apollo: {[key: string]: any};
    astro: {[key: string]: any};
    datasources: {[key: string]: any};
    endpoints: {[key: string]: any};
    feathers: {[key: string]: any};
    intervals: {[key: string]: any};
    mailers: {[key: string]: any};
    peer: {[key: string]: any};
    procs: {[key: string]: any};
    routes: {[key: string]: any};
    services: {[key: string]: any};
    svelte: {[key: string]: any};
    uploads: {[key: string]: any};

    errors: ErrorsInterface;
    filters: FiltersInterface;    
    json: JsonInterface;
    mail: MessageInterface;
    params: ParamsInterface;
    route: RouteInterface;
    endpoint: EndPointInterface;
}