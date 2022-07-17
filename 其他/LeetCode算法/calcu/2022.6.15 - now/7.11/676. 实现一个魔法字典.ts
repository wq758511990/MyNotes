class MagicDictionary {
  dictionary: string[] = [];
  constructor() {}

  buildDict(dictionary: string[]): void {
    this.dictionary = dictionary;
  }

  search(searchWord: string): boolean {
    for (let i = 0; i < this.dictionary.length; i++) {
      if (this.canChange(searchWord, this.dictionary[i])) {
        return true;
      }
    }
    return false;
  }

  canChange(sourceWord: string, targetWord: string) {
    if (sourceWord === targetWord || sourceWord.length !== targetWord.length)
      return false;
    let ans = 0;
    for (let i = 0; i < sourceWord.length; i++) {
      if (sourceWord[i] !== targetWord[i]) ans++;
    }
    return ans === 1;
  }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

const magicDictionary = new MagicDictionary();
console.log(magicDictionary.buildDict(["hello", "leetcode"]));
console.log(
  magicDictionary.search("hello") // 返回 False
);
console.log(
  magicDictionary.search("hhllo") // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
);
console.log(
  magicDictionary.search("hell") // 返回 False
);
console.log(magicDictionary.search("leetcoded"));
