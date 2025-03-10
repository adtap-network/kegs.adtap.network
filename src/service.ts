import Base from './base';
import AccountBean from './beans/account';
import ErrorsBean from './beans/errors';
import AdapterInterface from './interfaces/adapter';
import ModelInterface from './interfaces/model';
import BaseInterface from './interfaces/base';
import ContextInterface from './interfaces/context';
import MysqlAdapter from "./adapters/my";
import PgAdapter from "./adapters/pg";
import { constants } from 'fs';
import { access } from 'fs/promises';
import QRCode from 'qrcode';
import sharp from 'sharp';

export default class Service extends Base {

    adapter: AdapterInterface;
    context: ContextInterface;

    constructor(context: ContextInterface, model: ModelInterface) { 
        super({}); 
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, model); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, model); }
    }

    deleteRecord(id: string) {  let r = this.adapter.getRow(id); this.adapter.deleteRow(id); return r; }

    getRecord(id: string) { return this.adapter.getRow(id); }

    listRecords() { return this.adapter.listRows(); }

    listByParams(params: object) { return this.adapter.listRowsByParams(params); }

    newRecord(params: BaseInterface) { return this.adapter.newRecord(params); }

    saveRecord(params: object) { let i = this.adapter.saveRow(params); let r = this.adapter.getRow(i); return r; }

    searchRecords(params: object) { return this.adapter.searchRows(params); }

    setAdapter(adapter: AdapterInterface) { this.adapter = adapter; }

    async fileExists(filePath: string): Promise<boolean> {
        try { await access(filePath, constants.F_OK); return true; }
        catch { return false; }
    }

    async generateQRCode(u: string): Promise<string> {
        try { const pngData = await QRCode.toDataURL(u, { errorCorrectionLevel: 'H', margin: 4, color: { dark: 'black', light: 'white' }}); return pngData; } 
        catch (error) { console.error('Error generating QR code:', error); return ''; }
    }

    getAccountBean(req: any): AccountBean | boolean {
        const account = this.getAccountFromSession(req);
        if(account instanceof AccountBean) { return account; }
        return false;
    }

    getContext(): ContextInterface { return this.context; }

    async httpGet(url: string): Promise<{ content: string, headers: string[] }> { const response = await fetch(url); const content = await response.text(); const headers = [...response.headers.keys()]; return { content, headers }; }

    async logException(e: unknown, file: string, func: string, dump: boolean=false) {
        if(e instanceof Error) {
            const c = this.context;
            const d = this.getLocalSeparator();
            const s = {filename: c.folder + '.log', directory: c.root + d + 'logs', filepath: c.root + d + 'logs' + d + c.folder + '.log'};
            let b = new ErrorsBean();
            b.setSettings(s);
            b.logException(e, file, func, 'error', dump);
        }
    }

    async makeThumbnailFromString(p: string, t: 'png' | 'jpg' | 'gif' = 'png', r: number = 0.2): Promise<string> {
        const imageBuffer = Buffer.from(p, 'base64');    
        try {
          const resizedBuffer = await sharp(imageBuffer).resize({ width: Math.round(150 * r), height: Math.round(150 * r) }).toBuffer();
          let resultBase64 = '';
          if (t === 'gif') { resultBase64 = (await sharp(resizedBuffer).gif().toBuffer()).toString('base64'); resultBase64 = 'data:image/gif;base64,' + resultBase64; }
          else if (t === 'jpg') { resultBase64 = (await sharp(resizedBuffer).jpeg().toBuffer()).toString('base64'); resultBase64 = 'data:image/jpeg;base64,' + resultBase64; }
          else { resultBase64 = (await sharp(resizedBuffer).png().toBuffer()).toString('base64'); resultBase64 = 'data:image/png;base64,' + resultBase64; }
          return resultBase64;
        }
        catch (err) { console.error('Error processing image', err); return ''; }
    }

    setContext(context: ContextInterface) { this.context = context; }
}