import Bean from '../bean';

export default class AnalyticBean extends Bean {

    analytic_timestamp: string     = '';
    analytic_trades: number        = 0;
    analytic_basevol: number       = 0;
    analytic_countervol: number    = 0;
    analytic_avg: number           = 0;
    analytic_high: number          = 0;
    analytic_low: number           = 0;
    analytic_open: number          = 0;
    analytic_close: number         = 0;

    constructor() { super(); }

    get_buying_average_price() { return this.formatLumens(1/this.analytic_avg); }
  
    get_buying_high_price() { return this.formatLumens(1/this.analytic_high); }
  
    get_buying_low_price() { return this.formatLumens(1/this.analytic_low); }
  
    get_buying_open_price() { return this.formatLumens(1/this.analytic_open); }
  
    get_buying_close_price() { return this.formatLumens(1/this.analytic_close); }

    get_selling_average_price() { return this.formatLumens(this.analytic_avg); }

    get_selling_high_price() { return this.formatLumens(this.analytic_high); }
  
    get_selling_low_price() { return this.formatLumens(this.analytic_low); }
  
    get_selling_open_price() { return this.formatLumens(this.analytic_open); }
  
    get_selling_close_price() { return this.formatLumens(this.analytic_close); }

}