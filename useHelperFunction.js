var toGoatLatin = function(S) {
    var app = '';
    var res = [];
    S.split(' ').forEach(function(el){
       var newWord = changeWord(el);
       app += 'a';
       newWord += app;
       res.push(newWord);
    })
    return res.join(' ');
};


var changeWord = function(word){
    var vowel = ['a','e','i','o','u','A','E','I','O','U'];
    if(vowel.indexOf(word[0])!==-1){
        word += 'ma';
    }else{
        word = word.slice(1) + word[0] + 'ma';
    }
    return word;
}