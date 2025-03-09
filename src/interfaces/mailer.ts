export interface MailerInterface {

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