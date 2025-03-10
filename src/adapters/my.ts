import Adapter from '../adapter'
import DatasourceInterface from '../interfaces/datasource';
import ModelInterface from '../interfaces/model';
import AdapterInterface from '../interfaces/adapter';
import mysql, { Pool, PoolConnection, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

class MysqlAdapter extends Adapter implements AdapterInterface {

    pool: Pool;

    constructor(datasource: DatasourceInterface, model: ModelInterface) {
        super(datasource, model);
                
        this.pool = mysql.createPool({
            host: this.datasource.host,
            user: this.datasource.user,
            password: this.datasource.password,
            database: this.datasource.database,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        })
    }

    async connect(): Promise<PoolConnection> {
        try {
            const connection = await this.pool.getConnection()
            console.log("Connected to MySQL")
            return connection
        } 
        catch (error) {
            console.error("Error connecting to MySQL:", error)
            throw error
        }
    }

    async query<T extends RowDataPacket[] | ResultSetHeader>(sql: string, values?: any[]): Promise<T> {
        let connection: PoolConnection | null = null
        try {
            connection = await this.connect()
            const [results] = await connection.execute<T>(sql, values)
            return results
        } 
        catch (error) {
            console.error("Query execution error:", error)
            throw error
        } 
        finally {
            if (connection) connection.release()
        }
    }

    async close(): Promise<void> {
        try {
            await this.pool.end()
            console.log("MySQL connection pool closed.")
        } 
        catch (error) {
            console.error("Error closing MySQL pool:", error)
            throw error
        }
    }

    buildQuery(f: object, t: string='select'): string {
        let q = '';
        if(t == 'insert') { q = this.buildInsertQuery(f); }
		else if(t == 'update') { q = this.buildUpdateQuery(f); }
		else if(t == 'delete') { q = this.buildDeleteQuery(f); }
		else if(t == 'count') { q = this.buildCountQuery(f); }
		else { q = this.buildSelectQuery(f); }
		if(this.debugging == true) { console.log(q); }
		return q;
	}

    buildCountClause(f: object): string {
        let q = '';
        return q;
    }

    buildCountQuery(f: object): string  {
        let q = '';
        q = this.buildCountClause(f);
		q += this.buildWhereClause(f);
        return q;
    }
    
    buildDeleteQuery(f: { [key: string]: any }): string {
        let q = "DELETE FROM `" + this.model.table + "`";
        q += " WHERE 1=1";
        for (let i = 0; i < this.model.cols.select.length; i++) {
            let k: string = this.model.cols.select[i];
            if (f.hasOwnProperty(k)) {
                let v = f[k];
                if (v != '') {
                    if (this.arrayContains(this.model.cols.strings, v)) { v = this.addSlashes(v); }
                    q += " AND " + this.getColumnAlias(k) + " = '" + v + "'";
                }
            }
        }
        return q;
    }

    buildInsertQuery(f: object): string  {
        let q = '';
        return q;
    }

    buildSelectQuery(f: object): string  {
        let q = '';
        return q;
    }

    buildUpdateQuery(f: object): string  {
        let q = '';
        return q;
    }

    buildWhereClause(f: object): string {
        let q = '';
        return q;
    }

}
export default MysqlAdapter;