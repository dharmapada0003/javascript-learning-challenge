function findVowels(word) {
  let count = 0;
  let makeSmallLetter = word.toLowerCase();

  for (const letter of makeSmallLetter) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }
  }
  console.log(`Number of vowel letters = ${count}`);
}

findVowels("Education");

findVowels("APPLE");

findVowels("xyz");
