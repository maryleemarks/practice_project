Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "If the word begins with a consonant, it will move that consonant to the end and add 'ay'."
Code: pigLatin("dog");
Expected Output: "ogday"

Test: "If the first two letters are 'qu' move both to the end and add 'ay'."
Code: pigLatin("quay");
Expected Output: "ayquay";

Test: "Function still works if capitalized."
Code: pigLatin("DOG");
Expected Output: "ogday"

Test: "It will turn multiple words into pig latin."
Code: pigLatin("dog cat");
Expected Output: "ogday atcay"