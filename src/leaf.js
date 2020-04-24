import Util from './util'
import $ from 'jquery'

class Leaf {
    constructor(opt) {
        this.$el = $("<span></span>");
        this.options = opt;
        this.data = Util.isUndefined(this.options.data) ? null : this.options.data;
        this.level = Util.isUndefined(this.options.level) ? 0 : this.options.level;
        this.path = this.options.path || "";
        this.type = this.getType() || "string";
        this.dateFormat = this.options.dateFormat;
        this.isLast = Util.isUndefined(this.options.isLast) ? true : this.options.isLast;
        this.render();
    }

    getType() {
        let m = "string";
        let d = this.data;
        if (Util.isNumber(d)) m = "number";
        else if (Util.isBoolean(d)) m = "boolean";
        else if (Util.isDate(d)) m = "date";
        else if (Util.isNull(d)) m = "null";
        return m;
    }

    getState() {
        let coma = this.isLast ? "" : ",";
        return {data: this.data, level: this.level, path: this.path, type: this.type, coma: coma};
    }

    render() {
        let state = this.getState(), quotation = '"';
        if (state.type == "date" && this.dateFormat) {
            state.data = quotation + Util.dateFormat(this.data, this.dateFormat) + quotation
        } else if (state.type == "string") {
            state.data = quotation + Util.encodeHTMLEntities(state.data) + quotation
        } else if (state.type == "null") {
            state.data = "null"
        }
        this.$el.html(this.template(state));
        return this;
    }

    template({type, data, coma}) {
        return `<div class="pj-leaf-container"><span class="pj-${type}">${data}</span><span>${coma}</span></div>`;
    }
}

export default Leaf;