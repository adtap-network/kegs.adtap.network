import Adapter from '../adapter';
import DatasourceInterface from '../interfaces/datasource';
import ModelInterface from '../interfaces/model';
import AdapterInterface from '../interfaces/adapter';
import { Pool, PoolClient, QueryResult, QueryResultRow } from 'pg';

class PgAdapter extends Adapter implements AdapterInterface {

    pool: Pool

    constructor(datasource: DatasourceInterface, model: ModelInterface) {
        super(datasource, model);

        this.pool = new Pool({
            host: this.datasource.host,
            user: this.datasource.user,
            password: this.datasource.password,
            database: this.datasource.database,
            port: this.datasource.port,
            max: 10,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000
        })
    }

    async connect(): Promise<PoolClient> {
        try {
            const client = await this.pool.connect()
            console.log("Connected to PostgreSQL")
            return client
        } 
        catch (error) {
            console.error("Error connecting to PostgreSQL:", error)
            throw error
        }
    }

    async query<T extends QueryResultRow = any>(sql: string, values?: any[]): Promise<QueryResult<T>> {
        let client: PoolClient | null = null;
        try {
            client = await this.connect();
            const result = await client.query<T>(sql, values);
            return result;
        } 
        catch (error) {
            console.error("Query execution error:", error);
            throw error;
        } 
        finally {
            if (client) client.release();
        }
    }

    async close(): Promise<void> {
        try {
            await this.pool.end()
            console.log("PostgreSQL connection pool closed.")
        } 
        catch (error) {
            console.error("Error closing PostgreSQL pool:", error)
            throw error
        }
    }

}
export default PgAdapter;
