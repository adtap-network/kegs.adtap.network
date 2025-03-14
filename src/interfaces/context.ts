import BaseInterface from './base';
import AccountInterface from './account';
import ErrorsInterface from './errors';
import FiltersInterface from "./filters";
import JsonInterface from "./json";
import MessageInterface from "./message";
import ParamsInterface from "./params";
import RouteInterface from "./route";
import EndPointInterface from "./endpoint";
import QueryInterface from './query';
import RowInterface from './row';
import { Request } from "express";

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
    mailer: {[key: string]: any};
    peer: {[key: string]: any};
    procs: {[key: string]: any};
    routes: {[key: string]: any};
    services: {[key: string]: any};
    svelte: {[key: string]: any};
    uploads: {[key: string]: any};

    account: AccountInterface;
    errors: ErrorsInterface;
    filters: FiltersInterface;    
    json: JsonInterface;
    mail: MessageInterface;
    params: ParamsInterface;
    route: RouteInterface;
    endpoint: EndPointInterface;
    query: QueryInterface;
    row: RowInterface;

    createColumn(a: string[]): {[key: string]: any};

    createEndPoint(a: string[]): {[key: string]: any};

    createField(a: string[]): {[key: string]: any};

    createRoute(a: string[]): {[key: string]: any};

    createSection(a: string[]): {[key: string]: any};

    disableMaintenanceMode(): void;
    
    enableMaintenanceMode(): void;

    exportProps(): {[key: string]: any};
    
    getProjectFolder(): string;

    getProjectRoot(): string;

    isEndPoint(name: string): boolean;

    isMaintenanceMode(): boolean;

    isRoute(name: string): boolean;

    mergeEndPoint(req: Request): void;

    mergeRequest(req: Request): void;

    mergeRoute(req: Request): void;

    mergeSection(req: Request): void;
}