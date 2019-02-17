/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var num = left,selfDividingNumbers = [];
    for(var i = left; i <= right; i++){
        var sum=0
        i.toString().split('').forEach(function(value){
            sum += i%parseInt(value); 
        })
        if(sum ==0 ){
          selfDividingNumbers.push(i);  
        }
        
    }
    return selfDividingNumbers;
    
};



// var text = '42px';
var integer = parseInt(text);
// returns 42

var text = '3.14someRandomStuff';
var pointNum = parseFloat(text);
// returns 3.14

