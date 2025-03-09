import AccountInterface from './account';
import ContextInterface from './context';

export default interface AgentInterface {

    context: ContextInterface;

    fileExists(filePath: string): Promise<boolean>;

    generateQRCode(u: string): Promise<string>

    getAccountBean(req: any): AccountInterface | boolean;

    getAccountFromSession(req: any): Promise<AccountInterface | boolean>;

    getContext(): ContextInterface;

    httpGet(url: string): Promise<{ content: string, headers: string[] }>;

    logException(e: unknown, file: string, func: string, dump: boolean): void;

    makeThumbnailFromString(p: string, t: string, r: number): Promise<string>;

    setContext(context: ContextInterface): void;
}