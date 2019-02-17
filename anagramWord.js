var anagram = function(a,b){
    return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(anagram('abc','bca'));
console.log(anagram('abc','bcae'));

a = JSON.parse('["ab","c"]') // convert string to object
b = JSON.parse('["a","bc"]') // 
console.log(a.join('') === b.join(''))

c = JSON.stringify(['a','bc']); // convert array to string;
console.log(c);