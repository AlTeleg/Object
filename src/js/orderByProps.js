export default function orderByProps(obj, params) {
    function sortByKey(object) {
        return Object.keys(object).sort().reduce((a, b) => {
            a[b] = object[b];
            return a;
        }, {});
    }
    const newObj = {};
    let newObj2 = {};
    for (const param of params) {
        newObj[param] = obj[param];
    }
    for (const param in obj) {
        if (!(params.includes(param))) {
            newObj2[param] = obj[param];
        }
    }
    newObj2 = sortByKey(newObj2);
    obj = Object.assign(newObj, newObj2);
    return obj;
}
