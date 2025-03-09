import ExpandedDate from './date';
import BaseInterface from './interfaces/base';

class Base implements BaseInterface {
	[key: string]: any;
	
	chr(ascii: number): string { return String.fromCharCode(ascii); }

	countKeys(): number { return Object.keys(this).length; }
	
	createUuid(): string { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => { const r = (Math.random() * 16) | 0; return (c === "x" ? r : (r & 0x3) | 0x8).toString(16); }); }

	getDateNow(): string {
	  const o = new ExpandedDate();
	  const y = o.getFullYear();
	  const m = o.getMonth() + 1;
	  const d = this.zeroPad(o.getDate().toString(), 2);
	  const h = this.zeroPad(o.getHours().toString(), 2);
	  const p = this.zeroPad(o.getMinutes().toString(), 2);
	  const z = this.zeroPad(o.getSeconds().toString(), 2);
	  return `${y}-${m}-${d} ${h}:${p}:${z}`;
	}

	getPropertyValue(k: string): any { return this.hasProperty(k) ? this[k] : ""; }
	
	getObjectByKey(a: {[key: string]: any}[], k: string, v: string | number | boolean): {} {
		let p = {};
		const l = a.length;
		for(let i=0; i<l; i++) {
			let r: {[key: string]: any} = a[i];
			if(r.hasOwnProperty(k)) {
				let x = r[k];
				if(x === v) { let p = r; break; }
			}
		}
		return p;
	}

	getPrefixObject(p: string): {[key: string]: any} { 
		let a: {[key: string]: any} = {}; 
		const ks = this.keysArray();
		for(let i=0; i<ks.length; i++) {
			let k = ks[i];
			let v = this[k];
			if(this.left(k, p.length) == p) { a[k] = v; }
		}
		return a;
	}

	hasProperty(k: string): boolean { return Object.prototype.hasOwnProperty.call(this, k); }
  
	isArray(v: any): boolean { return Array.isArray(v); }
  
	isBoolean(v: any): boolean { return typeof v === "boolean"; }
  
	isDate(v: any): boolean { return v instanceof Date && !isNaN(v.getTime()); }
	
	isNull(v: any): boolean { let r = false; if(v === null) { r = true; } return r; }

	isNumeric(v: any): boolean { return !isNaN(Number(v)); }
	
	isObject(v: any): boolean { return typeof v === "object" && v !== null; }
	
	isSet(o: object, k: string) { return o.hasOwnProperty(k); }

	isSimple(value: unknown): boolean { return value !== null && value !== undefined && typeof value !== "object" && typeof value !== "function"; }

	left(s: string, n: number): string { return s.slice(0, n); }

	keysArray(): string[] { return Object.keys(this); }

	listPropertyObjects(): Record<string, any> {
		let o: Record<string, any> = {};
		const ks = this.keysArray();
		for(let i=0; i<ks.length; i++) {
			let k = ks[i];
			let v = this[k];
			if(this.isObject(v)) { o[k] = v; }
		}
		return o;
	}

	mergeArgs(a: Record<string, any>): void { Object.keys(a).forEach((k) => this.setPropertyValue(k, a[k])); }
  
	mergeProperties(o: Record<string, any>): void { 
	  Object.keys(o).forEach((k) => { 
	    if (this.hasProperty(k)) { this.setPropertyValue(k, o[k]); } 
	  }); 
	}

	numberFormat(number: number, decimals: number = 0, decimalSeparator: string = ".", thousandsSeparator: string = ","): string {
		if(!isFinite(number)) { throw new Error("Invalid number input."); }
		let formattedNumber = number.toFixed(decimals);
		let [integerPart, decimalPart] = formattedNumber.split(".");
		integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
		return decimalPart ? integerPart + decimalSeparator + decimalPart : integerPart;
	}

	replaceKeys(o: Record<string, any>, n: string, r: string): Record<string, any> {
		const a = Object.keys(o);
		let b: {[key: string]: any} = new Object();
		for(let i=0; i<a.length; i++) {
			let k = a[i];
			let v = o[k];
			let f = k.replace(n, r);
			b[f] = v;
		}
		return b;
	}
	
	right(s: string, n: number): string { return s.slice(-n); }

	setObjectPropertyValue(o: {[key: string]: any}, k: string, v: any): {[key: string]: any} { if(o.hasProperty(k)) { o[k] = v; } return o; }

	setPropertyValue(k: string, v: any): void { this[k] = v; }

	setDefaultProperty(k: string, v: unknown): void { if (!this.hasProperty(k) || this[k] === null) { this[k] = v; } }
	
	strReplace(search: string | string[], replace: string | string[], subject: string): string {
		if(Array.isArray(search)) {
		  if(!Array.isArray(replace)) { replace = Array(search.length).fill(replace); }
		  search.forEach((s, index) => {
			const replacement = replace[index] ?? "";
			subject = subject.split(s).join(replacement);
		  });	
		  return subject;
		}
		return subject.split(search).join(replace as string);
	}
	
	time() { return Math.floor(Date.now() / 1000); }
	
	trim(str: string, chars: string = " \t\n\r\v\0"): string { const pattern = new RegExp(`^[${chars}]+|[${chars}]+$`, "g"); return str.replace(pattern, ""); }

	unset(key: string): void { if(key in this.data) { delete this.data[key]; } }

	zeroPad(t: string, l: number): string { return t.padStart(l, "0"); }

	zeroUnpad(t: string): string {
		let length = t.length;
		for (let i = 1; i < length; i++) {
			const p = length - i;
			const s = t.charAt(p);	  
			if (s === '0') { t = t.substring(0, p); } 
			else if (s === '.') { t = t.substring(0, p); break; } 
			else { break; }
		}
		return t;
	}
}

export default Base;