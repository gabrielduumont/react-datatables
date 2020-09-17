
const sanitizeDateAsArray = (date = []) => {
  const shallowCopy = [...date];
  if (parseInt(shallowCopy[0]) < 10) shallowCopy[0] = '0' + shallowCopy[0];
  if (parseInt(shallowCopy[1]) < 10) shallowCopy[1] = '0' + shallowCopy[1];
  if (parseInt(shallowCopy[2]) < 10) shallowCopy[2] = '0' + shallowCopy[2];
  return shallowCopy;
}

const sanitizeDate = (date) => {
  const sanitized = date.split('-');
  return new Date(parseInt(sanitized[0]), parseInt(sanitized[1])-1, parseInt(sanitized[2]), 0, 0, 0, 0);
};

export const dateRegexList = [
  {
    format: "YYYY-MM-DD or YYYY/MM/DD or YYYY.MM.DD",
    regex: /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    standardize: (value) => {
      let standard = null;
      if (value.includes('.')) {
        standard = sanitizeDateAsArray(value.split('.'));
      }
      else if (value.includes('/')) {
        standard = sanitizeDateAsArray(value.split('/'));
      }
      else {
        standard = sanitizeDateAsArray(value.split('-'));
      }
      return sanitizeDate(standard.join("-"));
    }
  },
  {
    format: "DD-MM-YYYY or DD/MM/YYYY or DD.MM.YYYY",
    regex: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
    standardize: (value = '') => {
      let standard = null;
      if (value.includes('.')) {
        standard = sanitizeDateAsArray(value.split('.'));
      }
      else if (value.includes('/')) {
        standard = sanitizeDateAsArray(value.split('/'));
      }
      else {
        standard = sanitizeDateAsArray(value.split('-'));
      }
      return sanitizeDate(standard[2] + '-' + standard[1] + '-' + standard[0]);
    }
  },
];

export const checkRegexArrayForMatch = (value = '') => {
  let countMatches = 0;
  for (let i = 0; i < dateRegexList.length; ++i) {
    if (value.match(dateRegexList[i].regex)) {
      countMatches++;
    }
  }
  return countMatches > 0;
}

export const getStandardDateBasedOnRegexArray = (value = '') => {
  let standardDate = null;
  for (let i = 0; i < dateRegexList.length; ++i) {
    if (value.match(dateRegexList[i].regex)) {
      standardDate = dateRegexList[i].standardize(value);
      break;
    }
  }
  return standardDate;
}

export const isDate = (value) => {
  return checkRegexArrayForMatch(value, dateRegexList);
}

export const handleStringValues = (value) => {
  if (isDate(value)) {
    return getStandardDateBasedOnRegexArray(value).toISOString();
  }
  else return value.toUpperCase();
}

export const dataTypeReducer = (type, value) => {
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

export default null;
