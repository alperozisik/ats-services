module.exports = exports = valueConverter;

function valueConverter(target) {
    for (let p in target) {
        if (p === "patientId")
            continue;
        let prop = target[p];
        switch (true) {
            case prop === "null":
                target[p] = null;
                break;
            case !isNaN(prop):
                target[p] = Number(prop);
                break;
        }
    }
    return target;
}