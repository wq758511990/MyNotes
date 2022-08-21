/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
function isPrefixOfWord(sentence: string, searchWord: string): number {
  const spilitedSentence = sentence.split(" ");
  for (let i = 0; i < spilitedSentence.length; i++) {
    const word = spilitedSentence[i];
    if (word.startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
}

console.log(isPrefixOfWord("i am tired", "you"));
