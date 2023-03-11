function shout(string) {return string.toUpperCase();}
function whisper(string) {return string.toLowercase();}
console.log(whisper("HELLO"));
function logShout(string) {console.log(string.toUpperCase());}
function logWhisper(string) {console.log(string.toLowercase());}
logWhisper("Hello");
function sayHiToGrandma(string) {if (string.toLowerCase()===string){return "i can't hear you!";}}
function sayHiToGrandma(string) {if (string===string.toUpperCase()){
    return "YES INDEED!";} 
else {return "I can't hear you!";} }
function sayHiToGrandma(string) {
    if (string === "I love you, Grandma.") {
      return "I love you, too.";
    } else {
      return "I can't hear you!";
    }
  }
  