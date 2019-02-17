/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //string no reverse; array has reverse; array contain num,string,object
    var splitS = s.split(' ');
        splitS.forEach(function(a,idx){
        splitS[idx] = a.split('').reverse().join('');
    })
    return splitS.join(' ');
    
}; 
