function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
    const paramvalue = new URLSearchParams(url);
    const value = paramvalue.get(parameter);
    return value;
}

var url= "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign"));