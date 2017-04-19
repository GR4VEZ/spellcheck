var API = require('../API.js');

describe("Spell check api methods: ", function() {

  it("Should return an array of chars for the work pizza", function() {
    expect(API.genCharArray('pizza')).toEqual(['p', 'i', 'z', 'z', 'a']);
  });

  it("Should remove all white space from the string 'piz za'", function() {
    expect(API.removeSpace('piz za')).toEqual('pizza');
  })

  xit("Should capitalize the first letter", function() {
    expect(API.genLetterCasedWords('test', [])).toEqual(['Test', 'test']);
  })

  xit("Should return vowel varients of a word", function(){
    expect(API.genVowelWords(['t', 't', 'e', 's', 's', 't'], [])).toEqual(['ttasst', 'ttisst', 'ttosst', 'ttusst'])
  })

  xit("Should be a unidirectional array of possible combinations of the word ttesst with dupes removed and vowel varients", function() {
    expect(API.genDupeLetterWordArray(API.genCharArray('ttesst'), 1, [])).toEqual(['ttesst', 'tesst', 'test'])
  })

  xit("Should be a bidirectional array of possible combinations of the word ttesst with dupes removed and vowel varients", function() {
    expect(API.genBiDirectionalWordArray(API.genCharArray('ttesst'))).toEqual(['ttesst', 'ttasst', 'ttisst', 'ttosst', 'ttusst', 'tesst', 'tasst', 'tisst', 'tosst', 'tusst', 'test', 'tast', 'tist', 'tost', 'tust', 'ttest', 'ttast', 'ttist', 'ttost', 'ttust'])
  })

});
