/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    var map = new Map()
    var max = 0
    var res
    A.forEach((a) => {
        if (!map.has(a)) {
            map.set(a, 1)
        } else {
            map.set(a, map.get(a) + 1)
        }
        if (map.get(a) > max) {
            max = map.get(a)
            res = a
        }
    })
    return res
};