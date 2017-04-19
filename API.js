module.exports = function(){

  return {
    genCharArray: genCharArray,
    removeSpace: removeSpace,
    genDupeLetterWordArray: genDupeLetterWordArray,
    genBiDirectionalWordArray: genBiDirectionalWordArray,
    genVowelWords: genVowelWords,
    genLetterCasedWords: genLetterCasedWords
  }

  function genCharArray(str) {
    return str.split('');
  }

  function removeSpace(str) {
    return str.replace(/\s+/g, '');
  }

  // Generate Duplicate Letter Words array
  //
  // strArray: the array of letters
  // idx: the starting index
  // accum: the accumulator to return
  // reverse: flag to indicate direction of parsing
  function genDupeLetterWordArray(strArray, idx, accum, reverse) {

    //accumulate
    if(accum.indexOf(strArray.join('')) == -1){
      genVowelWords(strArray, 0, accum);
    }

    //basecase
    if((reverse && idx <= 0) || (!reverse && idx >= strArray.length)){
      return accum;
    }

    //deletecase
    if(strArray[reverse ? idx + 1 : idx - 1] == strArray[idx]){
      strArray.splice(idx, 1);
      //recurse
      return genDupeLetterWordArray(strArray, idx,  accum);
    } else {
      //recurse
      return genDupeLetterWordArray(strArray, (reverse ? idx - 1 : idx + 1), accum);
    }
  }

  function genBiDirectionalWordArray(strArray) {
    var keys = {}, i;
    var wordArray = genDupeLetterWordArray(strArray.slice(0), 1, [], false);
    var reverseWordArray = genDupeLetterWordArray(strArray.slice(0), strArray.length - 2, [], true);
    for (i = 0; i < wordArray.length; i++) {
      keys[wordArray[i]] = true;
    }
    for (i = 0; i < reverseWordArray.length; i++) {
      keys[reverseWordArray[i]] = true;
    }
    return Object.keys(keys);
  }

  // Generate Multilayered word arrays based on vowels
  //
  // wordArray: the array of letters
  // idx: the starting index
  // accum: the accumulator to return
  function genVowelWords(wordArray, idx, accum) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if(accum.indexOf(wordArray.join('')) == -1){
      accum.push(wordArray.join(''));
    }

    if(idx >= wordArray.length){
      return;
    }

    var vowelArray = [];
    var newIdx;
    for(var i = idx; i < wordArray.length; i++) {
      if(vowels.indexOf(wordArray[i].toLowerCase()) != -1) {
        for(var j = 0; j < vowels.length; j++) {
          if(j != vowels.indexOf(wordArray[i].toLowerCase())) {
            var newWord = wordArray.slice(0);
            newWord[i] = vowels[j];
            vowelArray.push(newWord);
            genLetterCasedWords(newWord, accum);
          } else {
            vowelArray.push(wordArray.slice(0));
            genLetterCasedWords(wordArray.slice(0), accum);
          }
        }
        newIdx = i + 1;
        break;
      }
    }
    for(var k = 0; k < vowelArray.length; k++){
      genVowelWords(vowelArray[k], newIdx, accum);
    }
  }

  function genLetterCasedWords(newWord, accum){
    var capitalized = newWord[0].toUpperCase() + newWord.slice(1).join('').toLowerCase();
    var lowercase = capitalized.toLowerCase();
    accum.push(capitalized);
    accum.push(lowercase);
    return [capitalized, lowercase];
  }

}();
