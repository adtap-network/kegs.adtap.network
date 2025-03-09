export class ExtendedDate extends Date {
    getRealDay() { return this.getDay() + 1; }

    getRealMonth() { return this.getMonth() + 1; }

    getShortHours() {
        let h = this.getHours();
        let t = 'am';
        let s = h;
        if (h === 0) { s = 12; }
        else if (h === 12) { t = 'pm'; }
        else if (h > 12) { t = 'pm'; s = h - 12; }
        return `${s} ${t}`;
    }

    getMonthAsString() { const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; return months[this.getMonth()]; }

    getDayAsString() { const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; return days[this.getDay()]; }

    setRealDay(v: number) { this.setDate(v); }

    setRealMonth(v: number) { this.setMonth(v - 1); }
}