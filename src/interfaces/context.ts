import ErrorsInterface from './errors';
import FiltersInterface from "./filters";
import Intervals from '../settings/intervals';
import JsonInterface from "./json";
import MessageInterface from "./message";
import ParamsInterface from "./params";
import RouteInterface from "./route";
import EndPointInterface from "./endpoint";
import Datasources from '../datasources';
import Mailers from '../settings/mailers';
import Procs from '../settings/procs';

export default interface ContextInterface {

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

    endpoints: {[key: string]: any};
    peer: {[key: string]: any};
    routes: {[key: string]: any};
    services: {[key: string]: any};
    uploads: {[key: string]: any};

    datasources: typeof Datasources;
    intervals: typeof Intervals;
    mailers: typeof Mailers;
    procs: typeof Procs;

    errors: ErrorsInterface;
    filters: FiltersInterface;
    json: JsonInterface;
    mail: MessageInterface;
    params: ParamsInterface;
    route: RouteInterface;
    endpoint: EndPointInterface;
}