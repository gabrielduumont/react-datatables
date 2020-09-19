import defaultLang from './defaultLang'

const setLanguage = (language) => {
  if (!language) {
    return defaultLang["en-us"];
  }
  else{
    if(typeof language === "string"){
      switch (language) {
        case "pt-br":
          return defaultLang["pt-br"];
        case "en-us":
        default:
          return defaultLang["en-us"];
      }
    }
    else return {
      ...defaultLang["en-us"],
      ...language
    };
  }

}

export default setLanguage;
