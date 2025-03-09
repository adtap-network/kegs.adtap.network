import AdTapMyDatasource from "./datasources/adtap-my";
import AdTapPgDatasource from "./datasources/adtap-pg";

const Datasources = {
    my: {
        adtap: new AdTapMyDatasource()
    },
    pg: { 
        adtap: new AdTapPgDatasource()
    } 
};
export default Datasources;