/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {  
    var i = 0,j=0;
    var l = A.length-1;
    for(;i<l;i++){  // var i inside for loop is local, can't 
    // be used outside for loop; for loop: for(;;) needs 2 semicolon
     if(A[i+1]<A[i]){
         break;
     } // increasing?
    }
      
    for(;j<l;j++ ){
     if(A[j+1]>A[j]){
         break;
     } // decreasing?
    } 
    
    if(i == l || j == l){
        return true;
    }else{
        return false
    }
}
