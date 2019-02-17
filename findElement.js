function numJewelsInStones(J, S) {
    var flag = 0;
    for(var i = 0; i<S.length;i++){
       for(var j = 0; j<J.length;j++){
          if(S[i] == J[j]){
           flag++;
          }
       } 
    }
    return flag;
};

