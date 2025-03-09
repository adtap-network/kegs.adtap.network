import BeanInterface from './bean';

export default interface CoinInterface extends BeanInterface {

    CoinId: string;
	CoinAccount: string;
	CoinClass: string;
	CoinType: string;
	CoinGroup: string;
	CoinReserves: string;
	CoinStatus: string;
	CoinStripe: string;
	CoinQuote: string;
	CoinCode: string
	CoinIssuer: string
	CoinAlpha: string;
	CoinName: string;
	CoinDomain: string;
	CoinDescr: string;
	CoinConditions: string;
	CoinRedemption: string;
	CoinAttestation: string;
    CoinHtml: string;
	CoinImage: string;
    CoinThumb: string;
	CoinSupply: number;
	CoinMin: number;
	CoinMax: number;
	CoinLiquidity: number;
    CoinFee: number;
	CoinPrice: number;
	CoinSpread: number;
	CoinYield: number;
	CoinFeatured: number;
	CoinAuth: boolean;
	CoinFetchedon: string;
	CoinXlm: number;
	CoinUsd: number;
	CoinXau: number;
	CoinXag: number;
	CoinBtc: number;
	CoinSol: number;
	CoinEth: number;
	CoinEur: number;
	CoinAmount: number;
	CoinReserved: number;
	CoinAvailable: number;
	CoinSelling: number;
	CoinBuying: number;
	CoinPooled: number;
	CoinBalance: number;
	TotalHolders: number;
	TotalMarkets: number;
	TotalOperations: number;
	TotalPayments: number;
	TotalPools: number;
	TotalRatings: number;
	TotalTrades: number;
	Holders: {[key: string]: any}[];
	Markets: {[key: string]: any}[];
	Pools: {[key: string]: any}[];
	Ratings: {[key: string]: any}[];
	Trades: {[key: string]: any}[];
    
    countHolders(): number;

    countMarkets(): number;

    countPools(): number;

    countRatings(): number;

    countTrades(): number;
}