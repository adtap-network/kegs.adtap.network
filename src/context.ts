import Bean from './bean';
import ErrorsBean from './beans/errors';
import ErrorsInterface from './interfaces/errors';
import FiltersBean from "./beans/filters";
import FiltersInterface from "./interfaces/filters";
import Intervals from './settings/intervals';
import JsonBean from "./beans/json";
import JsonInterface from "./interfaces/json";
import MessageBean from "./beans/message";
import MessageInterface from "./interfaces/message";
import ParamsBean from "./beans/params";
import ParamsInterface from "./interfaces/params";
import Route from "./route";
import RouteInterface from "./interfaces/route";
import EndPoint from "./endpoint";
import EndPointInterface from "./interfaces/endpoint";
import Datasources from './datasources';
import Mailers from './settings/mailers';
import Procs from './settings/procs';
import path from 'path';
import fs from 'fs';

class Context extends Bean {

    datastore: string                   = 'my';
    domain: string                      = '';
    federation: string                  = '';
    fetchedon: string                   = '';
    folder: string                      = '';
    ip: string                          = '';
    landing: string                     = 'home_index';
    modekey: string                     = 'network13331adtap';
    pubkey: string                      = 'GDBJL7BOUTDE2UPD7IBIYES7ZQZ6O7B2Z63E72CMJYSXD5JGOXP5DDTS';
    ps: string                          = this.getLocalSeparator();
    reference: string                   = '';
    root: string                        = '';
    updatedon: string                   = '';
    url: string                         = '';
    attempted: string                   = "";
    content: string 				    = "";
    deciphered: string				    = "";

    buffer: number      				= 3;
    fee: number     					= 0.0375;
    port: number					    = 443;

    curate: boolean                     = false;
    debug: boolean                      = false;
    logvisit: boolean                   = true;
    maintenance: boolean                = false;
    pci: boolean                		= false;

    endpoints: {[key: string]: any}     = {};
    peer: {[key: string]: any}          = {};
    routes: {[key: string]: any}        = {};
    services: {[key: string]: any}      = {};
    uploads: {[key: string]: any} 	    = {};

    datasources: typeof Datasources     = Datasources;
    intervals: typeof Intervals         = Intervals;
    mailers: typeof Mailers             = Mailers;
    procs: typeof Procs                 = Procs;

    errors: ErrorsInterface             = new ErrorsBean();
    filters: FiltersInterface 		    = new FiltersBean();
    json: JsonInterface 			    = new JsonBean();
    mail: MessageInterface			    = new MessageBean();
    params: ParamsInterface 		    = new ParamsBean();
    route: RouteInterface               = new Route();
    endpoint: EndPointInterface         = new EndPoint();

    constructor() { 
        super();
        this.root = this.getProjectRoot();
        this.folder = this.getProjectFolder();
    }

    disableMaintenanceMode(): void { }

    enableMaintenanceMode(): void { }

    initBootstrap(domain: string): void {
        let i = this.getLocalIp4();
        if(i != undefined) { this.ip = i; }
        let d = domain.split('.');
        if(d.length >= 2) { this.federation = d[d.length-2] + '.' + d[d.length-1]; }
        this.domain			      =	domain;
		this.url				  =	'https://' + domain;
		this.reference	          =	this.domain.replace('.','_');
		this.root 			      =	this.getProjectRoot();
		this.secret 		      =	this.getEnvironmentVariable('GDBJL7BOUTDE2UPD7IBIYES7ZQZ6O7B2Z63E72CMJYSXD5JGOXP5DDTS');
    }

    initPeer(): void {
        this.peer = {
            name: this.reference,
            ip: this.ip,
            domain: this.domain,
            url: this.url,
            root: this.url,
            federation: this.federation,
            webroot: this.root,
            backup:	this.root + this.ps + 'database' + this.ps + this.reference,
            htdocs:	this.root + this.ps + 'htdocs' + this.ps + this.reference,
            volume:	this.root + this.ps + 'volumes' + this.ps + this.reference,
            source:	this.root + this.ps + 'classes',
            data: this.root + this.ps + 'data',
            logs: this.root + this.ps + 'logs',
            skin: this.root + this.ps + 'skin',
            theme: this.root + this.ps + 'themes' + this.ps + this.reference,
            toml:this.root + this.ps + 'toml',
            wasm: this.root + this.ps + 'wasm',
            templates: this.root + this.ps + 'templates'
        };
    }

    getProjectRoot(): string {
        let currentDir = process.cwd();
        while (!fs.existsSync(path.join(currentDir, 'node_modules'))) {
            const parentDir = path.dirname(currentDir);
            if (parentDir === currentDir) {
                throw new Error('Project root not found (no node_modules directory)');
            }
            currentDir = parentDir;
        }
        return currentDir;
    }

    getProjectFolder(): string { return path.basename(this.root); }

    isMaintenanceMode(): boolean { return this.maintenance; }

    isEndPoint(name: string): boolean { let i = false; if(this.endpoints.hasProperty(name)) { i = true; } return i; }

    isRoute(name: string): boolean { let i = false; if(this.routes.hasProperty(name)) { i = true; } return i; }
    
}
export default Context;