//namespaces def.
var PrettyJSON = {
    view:{},
    tpl:{}
};

/**
* @class PrettyJSON.util
* helpers def. 
*
* @author #rbarriga
* @version 0.1
*
**/
let util = {
    isObject (v){
        return Object.prototype.toString.call(v) === '[object Object]';
    },
    pad (str, length){
        str = String(str);
        while(str.length < length) str = '0' + str;
            return str;
    },
    dateFormat (date, f){
        f = f.replace('YYYY', date.getFullYear());
        f = f.replace('YY', String(date.getFullYear()).slice(-2));
        f = f.replace('MM', PrettyJSON.util.pad(date.getMonth() + 1, 2));
        f = f.replace('DD', PrettyJSON.util.pad(date.getDate(), 2));
        f = f.replace('HH24', PrettyJSON.util.pad(date.getHours(), 2));
        f = f.replace('HH', PrettyJSON.util.pad((date.getHours() % 12), 2));
        f = f.replace('MI', PrettyJSON.util.pad(date.getMinutes(), 2));
        f = f.replace('SS', PrettyJSON.util.pad(date.getSeconds(), 2));
        return f;
    },
    parseJSON (data) {
        let obj;
        try {
            obj = JSON.parse(data);
        } catch (e) {
            data = data.replace(/([{,])(\s*)?(['"])?([A-Za-z0-9_\-]+?)(['"])?(\s*)?:/g, '$1"$4":');
            try {
                obj = JSON.parse(data);
            } catch (e) {
                return 'invalid JSON';
            }
        }
        return obj;
    },
    isNumber (obj) {
        return typeof obj === 'number' || obj instanceof Number;
    },
    isBoolean (obj) {
        return typeof obj === 'boolean' || obj instanceof Boolean;
    },
    isDate (obj) {
        return obj instanceof Date;
    },
    isNull (obj) {
        return obj === null;
    },
    isUndefined (obj) {
        return obj === undefined;
    },
    isArray (obj) {
        return obj instanceof Array || Array.isArray(obj);
    },
    isString (obj) {
        return typeof obj === 'string' || obj instanceof String;
    },
    getSize (obj) {
        if (this.isNull(obj)) {
            return 0;
        }
        if (this.isArray(obj)) {
            return obj.length;
        }
        return Object.keys(obj).length;
    }
};

export default util;