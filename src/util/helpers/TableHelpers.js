import { isDate } from './DateHelpers'

const handleStringValues = (value) => {
    if (isDate(value)) {
        //return getStandardDateBasedOnRegexArray(value).toISOString();
    }
    else return value.toUpperCase();
}

const dataTypeReducer = (type, value) => {
    switch (type) {
        case "string":
            return handleStringValues(value);
        case "number":
            return parseFloat(value);
        case "object":
        case "function":
        case "undefined":
        case "boolean":
        default:
            return value;
    }
};

export const orderByParser = (o, key) => {
    const value = !!o[key].parser ?
        o[key].parser(o[key].value)
        : o[key].value;

    dataTypeReducer(typeof value, value);

    return value;
}
export const filterParser = (o, search) => {
    let isValueIn = false;
    for (var prop in o) {
        const value = !!o[prop].parser ? o[prop].parser(o[prop].value) : o[prop].value;
        const standardizedValue = typeof value === "string" ? (!!value ? value.toLowerCase() : "") : "";
        const standardizedSearch = !!search ? search.toLowerCase() : "";
        isValueIn = isValueIn || standardizedValue.includes(standardizedSearch);
    }
    return isValueIn;
}

export const getPagesFromData = (data, size) => {
    const arrays = [];
    const arrData = [...data];
    while (arrData.length > 0)
        arrays.push(arrData.splice(0, size));

    return arrays;
}

export default null;