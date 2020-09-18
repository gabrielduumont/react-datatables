import { DateTime } from 'luxon';


const createSafeDate = (date = null, format = null) => {
  if (!date)
    return DateTime.local();
  if (!format)
    return DateTime.fromISO(date);

  return DateTime.fromFormat(date, format);
};

const addLeadingZeroToDatePartsIfNeeded = (date = {
  year: null,
  month: null,
  day: null,
}) => {
  const shallowCopy = { ...date };
  for (let i in shallowCopy) {
    if (parseInt(shallowCopy[i]) < 10) {
      shallowCopy[i] = '0' + shallowCopy[i];
    }
  }

  return shallowCopy;
}

const breakDateStringIntoObject = (date = '') => {
  const baseDateSeparators = ['.', '/', '-'];
  let dateObj = {
    year: null,
    month: null,
    day: null,
  };
  let foundValue = false;
  for (let i in baseDateSeparators) {
    if (date.includes(baseDateSeparators[i])) {
      let splitter = date.split(baseDateSeparators[i]);
      if (splitter[0].length === 4) {
        dateObj.year = splitter[0];
        dateObj.month = splitter[1];
        dateObj.day = splitter[2];
      }
      else {
        dateObj.year = splitter[2];
        dateObj.month = splitter[1];
        dateObj.day = splitter[0];
      }
      foundValue = true;
      break;
    }
  }

  return !!foundValue ? dateObj : null;
}

const sanitizeDateString = (date = '') => {
  const dateObject = breakDateStringIntoObject(date);
  
  if(!dateObject) return null;
  const standardObject = addLeadingZeroToDatePartsIfNeeded(dateObject);

  return standardObject.year + '' + standardObject.month + '-' + standardObject.day;
}


export const checkRegexArrayForMatch = (value = '') => {
  let countMatches = 0;
  /*for (let i = 0; i < dateRegexList.length; ++i) {
    if (value.match(dateRegexList[i].regex)) {
      countMatches++;
    }
  }*/
  return countMatches === 0;
}

export const isDate = (value) => {
  return checkRegexArrayForMatch(value);
}



export default null;
