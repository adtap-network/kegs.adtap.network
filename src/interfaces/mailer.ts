import BaseInterface from './base';

export default interface MailerInterface extends BaseInterface {

    username: string;
    hash: string;
    password: string;
    port: number;
    from: string;
    sender: string;
    host: string;
    timeout: number;

    encryptPassword() : void;

    decryptPassword() : void;

}