'use strict';

var prompt = require('prompt');
var API = require('./API.js');
var fs = require('fs');
var words ='/usr/share/dict/words';

let fileLoad = new Promise((resolve, reject) => {
  var dictionary = {};
  fs.readFile(words, 'utf8', function (err,data) {
    var wordArray = data.trim().split('\n');
    if (err) {
      return console.log(err);
    }
    for(var i = 0; i < wordArray.length; i++){
      dictionary[wordArray[i]] = true;
    }
    resolve(dictionary);
  })
});

fileLoad.then((dictionary) => {

  prompt.start();
  prompt.message = '';
  prompt.delimiter = '';

  function promp() {
    prompt.get({
      properties: {
        '>': {
          required: true,
          description: '',
          message: 'Please enter a word.'
        }
      }
    }, function (err, result) {
      if(err) { return onErr(err); }

      var noHash = true;
      if(dictionary.hasOwnProperty(result['>'])){
        console.log(result['>']);
        noHash = false;
      } else {
        var suggestions = API.genBiDirectionalWordArray(API.genCharArray(API.removeSpace(result['>'])));
        for(var i = 0; i < suggestions.length; i++){
          if(dictionary.hasOwnProperty(suggestions[i])) {
            console.log(suggestions[i]);
            noHash = false;
            break;
          }
        }
      }
      if(noHash) {
        console.log('NO SUGGESTION');
      }
      promp();

      var noHash = true;
      for(hash in API.genBiDirectionalWordArray(API.genCharArray(API.removeSpace(result['>']))), function(){
        console.log(hash);
      });
      if(noHash) {
      }
    });
  }

  function onErr(err) {
    console.log(err);
    return 1;
  }

  //start the prompt
  promp();

});
