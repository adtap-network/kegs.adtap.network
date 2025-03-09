import DatasourceInterface from './datasource';
import ErrorsInterface from './errors';

export default interface ContextInterface {

    buffer: number;
    curate: boolean;
    datastore: string;
    datasources: DatasourceInterface;
    debug: boolean;
    domain: string;
    errors: ErrorsInterface;
    federation: string;
    fee: number;
    fetchedon: string;
    folder: string;
    intervals: {[key: string]: any};
    ip: string;
    landing: string;
    logvisit: boolean;
    mailers: {[key: string]: any};
    maintenance: boolean;
    modekey: string;
    pci: boolean;
    procs: {[key: string]: any};
    peer: {[key: string]: any};
    pubkey: string;
    ps: string;
    reference: string;
    root: string;
    updatedon: string;
    url: string;

    initBootstrap(domain: string): void;

    initPeer(): void;

    getProjectRoot(): string;

    getProjectFolder(): string;
}