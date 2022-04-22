function toGoatLatin (sentence) {
  var strArr = sentence.split(' ');
  var headAlphas = ['a', 'e', 'i', 'o', 'u'];
  var ans = [];
  var handleStr = function (str, index) {
    var ansStr = '';
    var firstAlpha = str[0];
    if (headAlphas.includes(firstAlpha)) {
      ansStr = str + 'ma';
    }
    else {
      ansStr = str.slice(1) + str.slice(0, 1) + 'ma';
    }
    ansStr += 'a'.repeat(index);
    return ansStr
  };
  for (var i = 0; i < strArr.length; i++) {
    var handledStr = handleStr(strArr[i], i);
    console.log('handledStr', handledStr)
    ans.push(handledStr);
  }
  return ans.join(' ');
}
console.log(toGoatLatin('I speak Goat Latin'));
