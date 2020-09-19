import { isDate, useDate } from './DateHelpers'

const handleStringValues = (value, headers, key) => {
    if (isDate(headers, key)) {
        return useDate(value);
    }
    else return value.toUpperCase();
}

const dataTypeReducer = (type, value, headers, key) => {
    switch (type) {
        case "string":
            return handleStringValues(value, headers, key);
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

export const orderByParser = (o, key, headers) => {
    const value = !!o[key].parser ?
        o[key].parser(o[key].value)
        : o[key].value;

    return dataTypeReducer(typeof value, value, headers, key);
}
export const filterParser = (o, search) => {
    let countMatches = 0;
    for (var prop in o) {
        const value = !!o[prop].value ? !!o[prop].parser ? o[prop].parser(o[prop].value) : o[prop].value : "" ;
        const standardizedValue = !!value ? value.toString().toLowerCase() : "";
        const standardizedSearch = !!search ? search.toString().toLowerCase() : "";
        if (standardizedValue.includes(standardizedSearch)) {
            ++countMatches;
            break;
        }
    }
    return countMatches > 0;
}

export const getPagesFromData = (data, size = 10) => {
    const arrays = [];
    const arrData = [...data];
    while (arrData.length > 0)
        arrays.push(arrData.splice(0, size));

    return arrays;
}

export default null;