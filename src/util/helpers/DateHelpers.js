const createSafeDate = (date = null) => {
  if (!date)
    return new Date();

  const safeDate = date.split('-').map(item => parseInt(item));  
  return new Date(safeDate[0], safeDate[1] - 1, safeDate[2], 0, 0, 0, 0);
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

  if (!dateObject) return null;
  const standardObject = addLeadingZeroToDatePartsIfNeeded(dateObject);

  return standardObject.year + '-' + standardObject.month + '-' + standardObject.day;
}


export const isDate = (headers = [], key) => {
  const itemHeader = headers.find(item => item.key.toUpperCase() === key.toUpperCase());
  return itemHeader.type === 'date';
}


export const useDate = (date = null) => {
  return createSafeDate(sanitizeDateString(date));
};

export default null;
