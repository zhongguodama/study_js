/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var athletes = []
    nums.forEach((score, idx) => {
        athletes.push({
            score: score,
            idx: idx
        })
    })

    athletes.sort((a,b)=>b.score - a.score)
    
    /*var res = []
    res[athletes[0].idx] = "Gold Medal"
    if (nums.length > 1)
        res[athletes[1].idx] = "Silver Medal"
    if (nums.length > 2)
        res[athletes[2].idx] = "Bronze Medal"
    if (nums.length > 3)
        for (var i = 3; i < nums.length; i++) {
            res[athletes[i].idx] = JSON.stringify(i+1)
        }
    return res
   */
    var rank = ['Gold Medal','Silver Medal','Bronze Medal'];
    
    athletes.forEach(function(el,idx){
       if(idx <3){
        el.rank = rank[idx];
       }else{
           el.rank = (idx+1).toString();
       }
    }) 
    athletes.forEach(function(el){
     nums[el.idx] = el.rank;
    })
    return nums;
};