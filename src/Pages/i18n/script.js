
// let elem = document.querySelector(html);
let htmlElem = document.querySelector("html");
let selected = document.querySelector("#selected");
console.log(selected);
selected.addEventListener('change', function(e){
    let newLang  = e.target.value;
    htmlElem.lang = newLang;
})

function onLanguageDetected(langInfo) {
    for (lang of  langInfo.languages) {
      console.log("Language is: " + lang.language);
      console.log("Percentage is: " + lang.percentage);
    }
  }
  
  var text = "L'homme est né libre, et partout il est dans les fers."
  
  var detecting = chrome.i18n.detectLanguage(text);
  detecting.then(onLanguageDetected);
