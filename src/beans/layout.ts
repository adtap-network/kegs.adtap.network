import Bean from '../bean';

export default class LayoutBean extends Bean {

    body             = {top: {left: '', center: '', right: ''}, middle: {left: '', center: '', right: ''}, bottom: {left: '', center: '', right: ''}};
    header           = {left: '', center: '', right: ''};
    footer           = {left: '', center: '', right: ''};

    constructor() { super(); }

}