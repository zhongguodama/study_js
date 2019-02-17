var findContentChildren = function(g, s) {
    g = g.sort();
    s = s.sort();
    var i = 0, j = 0;
    while(i<g.length){
    if(g[i]<=s[j] && s[j] != undefined){
        i++;
        j++;
    }else if(s[j] != undefined && g[i]>s[j]){
        j++;
    }else{
        break;
    }
    }
    return i;
};

findContentChildren([10,9,8,7],[5,6,7,8]);