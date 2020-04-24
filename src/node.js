import Leaf from './leaf';
import Util from './util';
import $ from 'jquery'

class Node {
    constructor(opt) {
        if(!opt.el) {
            this.$el = $("<span></span>");
        } else {
            this.$el = opt.el instanceof $ ? opt.el : $(opt.el);
        }

        this.options = opt;
        this.data = this.options.data || null;
        this.level = this.options.level || 1;
        this.path = this.options.path || "";
        this.isLast = Util.isUndefined(this.options.isLast) ? true : this.options.isLast;
        this.rendered = false;
        this.dateFormat = this.options.dateFormat;

        let m = this.getMeta();
        this.type = m.type;
        this.size = m.size;
        this.childs = [];
        this.render();
        this.show()
    }

    getMeta() {
        return {size: Util.getSize(this.data), type: Util.isArray(this.data) ? "array" : "object"};
    }

    elements() {
        this.els = {
            container: this.$el.find(".pj-node-container"),
            contentWrapper: this.$el.find(".pj-node-content-wrapper"),
            top: this.$el.find(".pj-node-top"),
            ul: this.$el.find(".pj-node-body"),
            down: this.$el.find(".pj-node-down")
        }
    }

    render() {
        this.$el.html(this.template());
        this.elements();
        let b = this.getBrackets();
        this.els.top.html(b.top);
        this.els.down.html(b.bottom);
        return this
    }

    renderChilds() {
        let count = 1;
        $.each(this.data, (key, val) => {
            let isLast = count === this.size;
            count = count + 1;
            let path = this.type === "array" ? this.path + "[" + key + "]" : this.path + "." + key;
            let opt = {
                key: key,
                data: val,
                parent: this,
                path: path,
                level: this.level + 1,
                dateFormat: this.dateFormat,
                isLast: isLast
            };
            let child = Util.isObject(val) || Util.isArray(val) ? new Node(opt) : new Leaf(opt);
            let li = $("<li/>");
            let quotation = '"';
            let colom = "&nbsp;:&nbsp;";
            let left = $("<span />");
            let right = $("<span />").append(child.$el);
            this.type === "array" ? left.html("") : left.html(quotation + Util.encodeHTMLEntities(key) + quotation + colom);
            left.append(right);
            li.append(left);

            this.els.ul.append(li);
            child.parent = this;
            this.childs.push(child)
        });
    }

    show() {
        if (!this.rendered) {
            this.renderChilds();
            this.rendered = true
        }
        this.els.top.html(this.getBrackets().top);
        this.els.contentWrapper.show();
        this.els.down.show()
    }

    getBrackets() {
        let v = {top: "{", bottom: "}"};
        if (this.type === "array") {
            v = {top: "[", bottom: "]"}
        }
        v.bottom = this.isLast ? v.bottom : v.bottom + ",";
        return v
    }

    expandAll() {
        $.each(this.childs, (child) => {
            if (child instanceof Node) {
                child.show();
                child.expandAll()
            }
        });
        this.show()
    }

    template() {
        return `<div class="pj-node-container"><span class="pj-node-top pj-node-bracket"></span><div class="pj-node-content-wrapper"><ul class="pj-node-body"></ul></div><span class="pj-node-down pj-node-bracket"></span></div>`;
    }
}

export default Node;