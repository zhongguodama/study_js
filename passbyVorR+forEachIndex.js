var flipAndInvertImage = function(A) {
    A.forEach(function(a){
      a.reverse(); 
      a.forEach(function(b, idx){
          a[idx] = 1-b;
      })
    })
   return A;
};    