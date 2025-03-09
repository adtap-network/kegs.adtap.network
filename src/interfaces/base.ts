export interface BaseInterface {
  
	countKeys(): number;
  
	getDateNow(): string;
  
	getPropertyValue(k: string): any;
  
	hasProperty(k: string): boolean;
  
	isArray(v: any): boolean;
  
	isBoolean(v: any): boolean;
  
	isDate(v: any): boolean;
  
	isNumeric(v: any): boolean;
  
	isObject(v: any): boolean;
	
	keysArray(): string[];

	mergeArgs(a: Record<string, any>): void;
  
	mergeProperties(o: Record<string, any>): void;
  
	setPropertyValue(k: string, v: any): void;

	setDefaultProperty(k: string, v: unknown): void;

	zeroPad(t: string, l: number): string;

	zeroUnpad(t: string): string;
}