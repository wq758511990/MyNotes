function toGoatLatin(sentence: string): string {
  const strArr = sentence.split(' ')
  const headAlphas = ['a', 'e', 'i', 'o', 'u']
  const ans = []
  const handleStr = (str: string, index: number): string => {
    let ansStr = ''
    let firstAlpha = str[0].toLocaleLowerCase()
    if (headAlphas.includes(firstAlpha)) {
      ansStr = str + 'ma'
    } else {
      ansStr = str.slice(1) + str.slice(0, 1) + 'ma'
    }
    ansStr += 'a'.repeat(index + 1)
    return ansStr
  }
  for (let i = 0; i < strArr.length; i++) {
    const handledStr = handleStr(strArr[i], i)
    ans.push(handledStr)
  }
  return ans.join(' ')
}

console.log(toGoatLatin('I speak Goat Latin'))
