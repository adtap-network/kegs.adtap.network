import Setting from "../setting"

class Intervals extends Setting {

    xlm: number             = 3600
    fiats: number           = 43200
    commodities: number     = 28800
    pools: number           = 7200
    products: number        = 7200
    drops: number           = 3600
    coins: number      	    = 7200
    inventory: number   	= 7200
    toml: number            = 604800
    wallets: number         = 2400
    issuers: number         = 604800
    domains: number         = 604800
    expert: number          = 7200
    context: number		    = 1200

    constructor() { super() }

}
export default Intervals;