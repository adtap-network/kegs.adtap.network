import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryFilesModel from "../models/entry-files";

class EntryFilesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryFilesModel());
    }

}
export default EntryFilesService;