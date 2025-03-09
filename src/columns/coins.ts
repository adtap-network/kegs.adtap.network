import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class CoinsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['coin_id','coin_code','coin_issuer','coin_alpha','coin_name','coin_domain','coin_type','coin_status','coin_descr','coin_conditions','coin_redemption','coin_attestation','coin_image','coin_thumb','coin_supply','coin_min','coin_max','coin_liquidity','coin_fee','coin_btc','coin_eur','coin_jpy','coin_usd','coin_xag','coin_xau','coin_xlm','coin_rating','coin_spread','coin_yield','coin_authorized','coin_featured','coin_updatedon'];
        this.insert = ['coin_id','coin_code','coin_issuer','coin_alpha','coin_name','coin_domain','coin_type','coin_status','coin_descr','coin_conditions','coin_redemption','coin_attestation','coin_image','coin_thumb','coin_supply','coin_min','coin_max','coin_liquidity','coin_fee','coin_btc','coin_eur','coin_jpy','coin_usd','coin_xag','coin_xau','coin_xlm','coin_rating','coin_spread','coin_yield','coin_authorized','coin_featured','coin_updatedon'];
        this.update = ['coin_id','coin_code','coin_issuer','coin_alpha','coin_name','coin_domain','coin_type','coin_status','coin_descr','coin_conditions','coin_redemption','coin_attestation','coin_image','coin_thumb','coin_supply','coin_min','coin_max','coin_liquidity','coin_fee','coin_btc','coin_eur','coin_jpy','coin_usd','coin_xag','coin_xau','coin_xlm','coin_rating','coin_spread','coin_yield','coin_authorized','coin_featured','coin_updatedon'];
        this.exact = ['coin_id','coin_code','coin_issuer','coin_alpha','coin_name','coin_domain','coin_type','coin_status','coin_descr','coin_conditions','coin_redemption','coin_attestation','coin_image','coin_thumb','coin_supply','coin_min','coin_max','coin_liquidity','coin_fee','coin_btc','coin_eur','coin_jpy','coin_usd','coin_xag','coin_xau','coin_xlm','coin_rating','coin_spread','coin_yield','coin_authorized','coin_featured','coin_updatedon'];
        this.search = ['coin_id','coin_code','coin_issuer','coin_alpha','coin_name','coin_domain','coin_type','coin_status','coin_descr','coin_conditions','coin_redemption','coin_attestation','coin_image','coin_thumb','coin_supply','coin_min','coin_max','coin_liquidity','coin_fee','coin_btc','coin_eur','coin_jpy','coin_usd','coin_xag','coin_xau','coin_xlm','coin_rating','coin_spread','coin_yield','coin_authorized','coin_featured','coin_updatedon'];

        this.guids = ['coin_id'];
        this.strings = ['coin_code','coin_issuer','coin_alpha','coin_name','coin_domain','coin_type','coin_status','coin_descr','coin_conditions','coin_redemption','coin_attestation','coin_image','coin_thumb'];
        this.dates = ['coin_updatedon'];
        this.booleans = ['coin_authorized','coin_featured'];
        this.numbers = ['coin_supply','coin_min','coin_max','coin_liquidity','coin_fee','coin_btc','coin_eur','coin_jpy','coin_usd','coin_xag','coin_xau','coin_xlm','coin_rating','coin_spread','coin_yield'];
        
        this.primary = 'coin_id';
        this.sortcol = 'coin_updatedon';
        this.sortdir = 'desc';
        this.sortorder = 'coin_updatedon desc';
    }
}
export default CoinsCols;