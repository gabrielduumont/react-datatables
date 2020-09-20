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
      shallowCopy[i] = '0' + parseInt(shallowCopy[i]);
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


export const isDate = (key, headers = []) => {
  const itemHeader = headers.find(item => item.key.toUpperCase() === key.toUpperCase());
  return itemHeader.type === 'date';
}


export const useDate = (date = null) => {
  return createSafeDate(sanitizeDateString(date));
};





const createSafeTime = (time = null) => {
  if (!time)
    return new Date();

  const today = new Date();
  const safeTime = time.split(':').map(item => parseInt(item));
  return new Date(today.getFullYear(), today.getMonth(), today.getDate(), safeTime[0], safeTime[1], safeTime[2], 0);
};

const addLeadingZeroToTimePartsIfNeeded = (time = {
  hours: null,
  minutes: null,
  seconds: null,
}) => {
  const shallowCopy = { ...time };
  for (let i in shallowCopy) {
    if (isNaN(parseInt(shallowCopy[i]))) {
      shallowCopy[i] = '00';
    }
    else {
      if (parseInt(shallowCopy[i]) < 10) {
        shallowCopy[i] = '0' + parseInt(shallowCopy[i]);
      }
    }
  }

  return shallowCopy;
}

const breakTimeStringIntoObject = (time = '') => {
  const splitter = time.split(':');

  return {
    hours: splitter[0],
    minutes: splitter[1],
    seconds: splitter[2],
  };
}

const sanitizeTimeString = (time = '') => {
  const timeObject = breakTimeStringIntoObject(time);

  if (!timeObject) return null;
  const standardObject = addLeadingZeroToTimePartsIfNeeded(timeObject);

  return standardObject.hours + ':' + standardObject.minutes + ':' + standardObject.seconds;
}


export const isTime = (key, headers = []) => {
  const itemHeader = headers.find(item => item.key.toUpperCase() === key.toUpperCase());
  return itemHeader.type === 'time';
}


export const useTime = (time = null) => {
  return createSafeTime(sanitizeTimeString(time));
};




const createSafeDateTime = ([date = null, time = null]) => {
  if (!time || !date)
    return new Date();

  const safeDate = createSafeDate(date);
  const safeTime = createSafeTime(time);

  return new Date(
    safeDate.getFullYear(),
    safeDate.getMonth(),
    safeDate.getDate(),
    safeTime.getHours(),
    safeTime.getMinutes(),
    safeTime.getSeconds(),
    0
  );
};


const sanitizeDateTimeString = (datetime = '') => {
  if (!datetime) return null;

  const [date, time] = datetime.split(' ');
  return [sanitizeDateString(date), sanitizeTimeString(time)];
}

export const isDateTime = (key, headers = []) => {
  const itemHeader = headers.find(item => item.key.toUpperCase() === key.toUpperCase());
  return itemHeader.type === 'datetime';
}

export const useDateTime = (datetime = null) => {
  return createSafeDateTime(sanitizeDateTimeString(datetime));
};

export default null;
