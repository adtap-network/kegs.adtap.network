import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryFavoritesModel from "../models/entry-favorites";

class EntryFavoritesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryFavoritesModel());
    }

}
export default EntryFavoritesService;