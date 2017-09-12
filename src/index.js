import Node from './node';
import Util from './util';

function render (data, opt) {
    opt.data = Util.parseJSON(data);
    new Node(opt);
}

if (typeof(window) !== 'undefined') {
    window.prettyJson = render;
}
module.exports = render;

