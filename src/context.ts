import Bean from './bean';
import ErrorsBean from './beans/errors';
import ErrorsInterface from './interfaces/errors';
import Intervals from './settings/intervals';
import Datasources from './datasources';
import Mailers from './settings/mailers';
import Procs from './settings/procs';
import path from 'path';
import fs from 'fs';

class Context extends Bean {
    
    buffer: number      				= 3;
    curate: boolean                     = false;
    datastore: string                   = 'my';
    datasources: typeof Datasources     = Datasources;
    debug: boolean                      = false;
    domain: string                      = '';
    errors: ErrorsInterface             = new ErrorsBean();
    federation: string                  = '';
    fee: number     					= 0.0375;
    fetchedon: string                   = '';
    folder: string                      = '';
    intervals: typeof Intervals         = Intervals;
    ip: string                          = '';
    landing: string                     = 'home_index';
    logvisit: boolean                   = true;
    mailers: typeof Mailers             = Mailers;
    maintenance: boolean                = false;
    modekey: string                     = 'network13331adtap';
    pci: boolean                		= false;
    procs: typeof Procs                 = Procs;
    peer: {[key: string]: any}          = {};
    pubkey: string                      = 'GDBJL7BOUTDE2UPD7IBIYES7ZQZ6O7B2Z63E72CMJYSXD5JGOXP5DDTS';
    ps: string                          = this.getLocalSeparator();
    reference: string                   = '';
    root: string                        = '';
    updatedon: string                   = '';
    url: string                         = '';

    constructor() { 
        super();
        this.root = this.getProjectRoot();
        this.folder = this.getProjectFolder();
    }

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
    
}
export default Context;