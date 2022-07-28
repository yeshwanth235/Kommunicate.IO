function getUrlParameterValue(url, parameter) {
  let params = url.searchParams;
  let str = params.get(parameter);
  return str;
}

const url = new URL(
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"
);

console.log(getUrlParameterValue(url, "utm_campaign"));
console.log(getUrlParameterValue(url, "utm_medium"));
