import Node from './node';
import Util from './util';

function render (data, opt) {
    opt.data = Util.parseJSON(data);
    new Node(opt);
}

window.prettyJson = render;
module.export = render;