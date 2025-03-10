import Base from './base';
import ErrorsBean from './beans/errors';
import ErrorsInterface from './interfaces/errors';
import FiltersBean from "./beans/filters";
import FiltersInterface from "./interfaces/filters";
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
import path from 'path';
import fs from 'fs';

class Context extends Base {

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

    apollo: {[key: string]: any}        = {};
    astro: {[key: string]: any}         = {};
    datasources: {[key: string]: any} 	= {};
    endpoints: {[key: string]: any}     = {};
    feathers: {[key: string]: any}      = {};
    intervals: {[key: string]: any} 	= {};
    mailers: {[key: string]: any} 	    = {};
    peer: {[key: string]: any}          = {};
    procs: {[key: string]: any} 	    = {};
    routes: {[key: string]: any}        = {};
    services: {[key: string]: any}      = {};
    svelte: {[key: string]: any}        = {};
    uploads: {[key: string]: any} 	    = {};   

    errors: ErrorsInterface             = new ErrorsBean();
    filters: FiltersInterface 		    = new FiltersBean();
    json: JsonInterface 			    = new JsonBean();
    mail: MessageInterface			    = new MessageBean();
    params: ParamsInterface 		    = new ParamsBean();
    route: RouteInterface               = new Route();
    endpoint: EndPointInterface         = new EndPoint();

    constructor(domain: string) { 
        super();
        this.root = this.getProjectRoot();
        this.folder = this.getProjectFolder();
        let i = this.getLocalIp4();
        if(i != undefined) { this.ip = i; }
        let d = domain.split('.');
        if(d.length >= 2) { this.federation = d[d.length-2] + '.' + d[d.length-1]; }
        this.domain = domain;
		this.url = 'https://' + domain;
		this.reference = this.domain.replace('.','_');
		this.root =	this.getProjectRoot();
		this.secret =	this.getEnvironmentVariable('GDBJL7BOUTDE2UPD7IBIYES7ZQZ6O7B2Z63E72CMJYSXD5JGOXP5DDTS');
        this.peer = {
            name: this.reference,
            ip: this.ip,
            domain: this.domain,
            url: this.url,
            root: this.url,
            federation: this.federation,
            webroot: this.root,
            htdocs:	this.root + this.ps + 'public' + this.ps + this.reference,
            volume:	this.root + this.ps + 'volume' + this.ps + this.reference,
            source:	this.root + this.ps + 'src',
            dist: this.root + this.ps + 'dist',
            logs: this.root + this.ps + 'logs',
            templates: this.root + this.ps + 'src' + this.ps + 'templates',
            toml:this.root + this.ps + 'volume' + this.ps + 'toml',
            wasm: this.root + this.ps + 'volume' + this.ps + 'wasm',
            styles: this.root + this.ps + 'public' + this.ps + 'styles',
            fonts: this.root + this.ps + 'public' + this.ps + 'fonts',
            images: this.root + this.ps + 'public' + this.ps + 'images'
        };
        this.astro = {
            routes: {
                home: '/home',
                about: '/about',
                // Add more dynamic routes as needed
            },
            build: {
                outputDir: path.join(this.root, 'dist'),
                publicDir: path.join(this.root, 'public')
            },
            integrations: [
                'svelte', // or other integrations like markdown, etc.
            ],
        };
        this.feathers = {
            apiUrl: process.env.FEATHERS_API_URL || 'http://localhost:3030',
            authentication: {
                secret: process.env.FEATHERS_AUTH_SECRET,
                strategies: ['jwt']
            },
            services: {
                userService: 'users',
                postService: 'posts',
                // Additional services as needed
            },
            sockets: {
                enable: true,
                url: process.env.FEATHERS_SOCKET_URL || 'ws://localhost:3030',
            }
        };
        this.svelte = {
            ssr: process.env.SVELTE_SSR || 'true',
            paths: {
                components: path.join(this.root, 'src', 'components'),
                stores: path.join(this.root, 'src', 'stores')
            },
            hydrate: true,
        };
    }

    disableMaintenanceMode(): void { }

    enableMaintenanceMode(): void { }

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