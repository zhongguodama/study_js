var shortestToChar = function(S, C) {
    var idx = [];
    var loc = 0;
    var A = S; // premitive(num,string...) pass by value wont change
    // A = S object(array...) pass by reference, will change A if S changed, use deep copy A = [...S] ... debracket
    loc = S.indexOf(C)
    idx.push(loc)
    while(loc !== -1){
    loc = S.indexOf(C, loc+1);
    idx.push(loc);
    }
    idx.pop();
    var res = [];
    A.split('').forEach(function(a,index){
        var output = [];
        idx.forEach(function(b){
            output.push(Math.abs(b-index))
        })
        res.push( Math.min(...output));
    })
    return res;
};