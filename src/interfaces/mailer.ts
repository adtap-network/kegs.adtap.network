import BeanInterface from './bean';

export default interface MailerInterface extends BeanInterface {

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