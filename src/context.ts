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
import QueryBean from './beans/query';
import QueryInterface from './interfaces/query';
import EndPoint from "./endpoint";
import EndPointInterface from "./interfaces/endpoint";
import path from 'path';
import fs from 'fs';
import { Request } from "express";

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
    mailer: {[key: string]: any} 	    = {};
    peer: {[key: string]: any}          = {};
    procs: {[key: string]: any} 	    = {};
    routes: {[key: string]: any}        = {};
    services: {[key: string]: any}      = {};
    scripts: {[key: string]: any}       = {};
    styles: {[key: string]: any}        = {};
    svelte: {[key: string]: any}        = {};
    uploads: {[key: string]: any} 	    = {};   

    errors: ErrorsInterface             = new ErrorsBean();
    filters: FiltersInterface 		    = new FiltersBean();
    json: JsonInterface 			    = new JsonBean();
    mail: MessageInterface			    = new MessageBean();
    params: ParamsInterface 		    = new ParamsBean();
    route: RouteInterface               = new Route();
    endpoint: EndPointInterface         = new EndPoint();
    query: QueryInterface               = new QueryBean();

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
            root: this.root,
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
            images: this.root + this.ps + 'public' + this.ps + 'images',
            config: this.root + this.ps + 'adtap.kegs.json'
        };

        this.errors.setSettings({filename: this.reference + '.log',directory: this.peer.logs,filepath: this.peer.logs + this.ps + this.reference + '.log'});

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

    createColumn(a: string[]): {[key: string]: any} { return {}; }

    createEndPoint(a: string[]): {[key: string]: any} { return {}; }

    createField(a: string[]): {[key: string]: any} { return {}; }

    createRoute(a: string[]): {[key: string]: any} { return {}; }

    createSection(a: string[]): {[key: string]: any} {
        let o = {"name": "", "alias": "", "parent": "", "title": "", "icon": "", "path": "", "local": "", "foreign": ""};
        if(a.length == 8) {
            o.name = a[0];
            o.alias = a[1];
            o.parent = a[2];
            o.title = a[3];
            o.icon = a[4];
            o.path = a[5];
            o.local = a[6];
            o.foreign = a[7];
        }
        return o;
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
    
    loadConfig(): void {
        const j = this.readFile(this.peer.config);
        const d =  JSON.parse(j);
        const b = new Base(d);
        if(b.hasProperty('apollo')) { this.apollo = b.apollo; }
        if(b.hasProperty('astro')) { this.astro = b.astro; }
        if(b.hasProperty('blocks')) { this.blocks = b.blocks; }
        if(b.hasProperty('datasource')) { this.datasource = b.datasource; }
        if(b.hasProperty('endpoints')) { this.endpoints = b.endpoints; }
        if(b.hasProperty('feathers')) { this.feathers = b.feathers; }
        if(b.hasProperty('intervals')) { this.intervals = b.intervals; }
        if(b.hasProperty('mailer')) { this.mailer = b.mailer; }
        if(b.hasProperty('procs')) { this.procs = b.procs; }
        if(b.hasProperty('routes')) { this.routes = b.routes; }
        if(b.hasProperty('sections')) { this.sections = b.sections; }  
    }

    mergeEndPoint(req: Request): void { }

    mergeRequest(req: Request): void {
        this.params.setParams(req); 
        this.mergeRoute(req);
        this.mergeSection(req);
    }

    mergeRoute(req: Request): void { 
        const { view, action } = req.params;
        const r = view + '_' + action;
        if(this.routes[r]) {
            this.route = this.routes[r];
        }
        else if(this.route.hasProperty('home_unknown')) {
            this.route = this.routes.home_unknown;
        }
    }

    mergeSection(req: Request): void {
        const { view } = req.params;
        if(this.sections[view]) {
            this.section = this.sections[view];
        }
    }
}
export default Context;