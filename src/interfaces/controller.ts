import ErrorsInterface from "./errors";
import FiltersInterface from "./filters";
import JsonInterface from "./json";
import MessageInterface from "./message";
import ParamsInterface from "./params";

export default interface ControllerInterface {

        attempted: string;
        content: string;
        deciphered: string;
        domain: string;
        errors: ErrorsInterface;
        filters: FiltersInterface;
        json: JsonInterface;
        mail: MessageInterface;
        params: ParamsInterface;
        port: number;
        services: {[key: string]: any};
        uploads: {[key: string]: any};

}