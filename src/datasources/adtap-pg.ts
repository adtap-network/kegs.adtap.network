import DatasourceInterface from "../interfaces/datasource";

class AdTapPgDatasource implements DatasourceInterface {

    type: string = ''
    host: string = ''
    port: number = 5432
    user: string = ''
    hash: string = ''
    password: string = ''
    database: string = ''
    schema: string = 'public'

    decryptPassword() { }

    encryptPassword() { }
    
    getDatabase() { return this.database }

    getHash() { return this.hash }

    getHost() { return this.host }

    getPassword() { return this.password }

    getPort() { return this.port; }

    getSchema() { return this.schema }

    getUser() { return this.user }

    setDatabase(database: string) { this.database = database }

    setHash(hash: string) { this.hash = hash }

    setHost(host: string) { this.host = host }

    setPassword(password: string) { this.password = password }

    setPort(port: number) { this.port = port; }

    setSchema(schema: string) { this.schema = schema; }

    setUser(user: string) { this.user = user; }

}
export default AdTapPgDatasource;