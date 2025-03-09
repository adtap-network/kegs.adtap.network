import BeanInterface from './bean';

export default interface DatasourceInterface extends BeanInterface {

    type: string;
    host: string;
    port: number;
    user: string;
    hash: string;
    password: string;
    database: string;
    schema: string;

    encryptPassword() : void;

    decryptPassword() : void;

    getDatabase(): string;

    getHash(): string;

    getHost(): string;

    getPassword(): string;

    getPort(): number;

    getSchema() : string;

    getUser() : string;

    setDatabase(database: string) : void;

    setHash(hash: string) : void;

    setHost(host: string) : void;

    setPassword(password: string) : void;

    setPort(port: number) : void;

    setSchema(schema: string) : void;

    setUser(user: string) : void;

}