function pigLatin(text) {
  const wordArray = text.split(" ");
  let pigArray = [];
  wordArray.foreach(index){
    if (index.charAt(0) === "a" || index.charAt(0) === "e" || index.charAt(0) === "i" || index.charAt(0) === "o" || index.charAt(0) === "u") {
      pigArray[index] = index.concat("way");
    }
    if else (index.charAt(0) === "b" || index.charAt(0) === "c" || index.charAt(0) === "d" || index.charAt(0) === "f" || index.charAt(0) === "g" || index.charAt(0) === "h" || index.charAt(0) === "j" || index.charAt(0) === "k" || index.charAt(0) === "l" || index.charAt(0) === "m" || index.charAt(0) === "n" || index.charAt(0) === "p" || index.charAt(0) === "r" || index.charAt(0) === "s" || index.charAt(0) === "t" || index.charAt(0) === "v" || index.charAt(0) === "w" || index.charAt(0) === "x" || index.charAt(0) === "y" || index.charAt(0) === "z") {
      pigArray[index] = index.substring(1).concat(index.charAt(0)).concat("ay");
    }
    //if else (index.charAt(0) === "q") {
    //  if (index.charAt(1) === "u") {

    //  }
    //  else {

    //  }
    //}
  }
} 



$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    const 
  });
});