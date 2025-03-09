import Bean from '../bean';
import AnalyticsBean from './analytics';

export default class ChartBean extends Bean {

    script: string              = '';
    canvas: string              = '';
    context: string             = '2d';
    type: string                = 'line';
    period: string  		    = 'day';
    label: string   		    = this.day() + ' ' + this.monthAsString() + ' ' + this.year();
    data: {[key: string]: any}  = {volume: 0, open: 0, close: 0, labels: '', datasets: [], records: []};

    constructor() { super(); }

    menuDay() { 
        let b = [];
        let h = 0;
        let t = '';
        for(let i=0;i<24;i++) { 
            if(i > 12) { t = 'PM'; h = i-12; } 
            else { h = i; t = 'AM'; } 
            b.push(h.toString() + ' ' + t); 
        } 
        return b; 
    }
    
    menuHour() { 
        let b = []; 
        for(let j=0;j<24;j++) { 
            let v = this.zeroPad(j.toString(),2); 
            b.push(v); 
        } 
        return b; 
    }
    
    menuMonth() { return []; }
    
    menuQuarter() { return []; }
    
    menuWeek() { return ['SUN','MON','TUE','WED','THU','FRI','SAT']; }
    
    menuYear() { return ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']; }
    
    setAnalytics(a: typeof AnalyticsBean) { this.analytics = a; }
    
    setCanvas(id: string): void { this.canvas = id; }
    
    setContext(d: string): void { this.context = d; }
    
    setScript(s: string): void { this.script = s; }
    
    setType(t: string): void { this.type = t; }

}