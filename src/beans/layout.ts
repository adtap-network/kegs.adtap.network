import Base from "../base";

export default class LayoutBean extends Base {

    body             = {top: {left: '', center: '', right: ''}, middle: {left: '', center: '', right: ''}, bottom: {left: '', center: '', right: ''}};
    header           = {left: '', center: '', right: ''};
    footer           = {left: '', center: '', right: ''};

    constructor() { super(); }

}