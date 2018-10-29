function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  let answer = "I can't hear you!";
  
  if(string === 'I love you, Grandma.') {
    answer = "I love you, too.";
  }
  
  return answer;
}