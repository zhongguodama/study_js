var firstUniqChar = function(s) {
    var map = new Map();
    s.split().forEach(function(el){
        if(!map.has(el)){
            map.set(el,1);
        }else{
            map.set(el,map.get(el)+1);
        }
    })
    
    for(var i = 0; i<s.length;i++){
        if(map.get(s[i]) == 1){
            return i;
        }
    }
    return -1;
  
};

var firstUniqChar = function(s) {
    var map = {};
    s.split().forEach(function(el){
        if(!map[el]){
            map[el] = 1;
        }else{
            map[el]++;
        }
    })
    
    for(var i = 0; i<s.length;i++){
        if(map[s[i]] == 1){
            return i;
        }
    }
    return -1;
  
};

firstUniqChar('leetcode')