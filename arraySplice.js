/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var arr = s.split('');
    var idx;
    var t = t.split('');
    arr.forEach(function(el){
       idx = t.indexOf(el); 
if(idx !== -1 ){
     t.splice(idx,1) // remove el at idx
}  
    })
    return t.join(''); // convert array t to string
};

