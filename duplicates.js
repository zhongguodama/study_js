var duplicates = function(arr){
// return [...arr,...arr]; //shallow copy
return [...JSON.parse(JSON.stringify(arr)), ...JSON.parse(JSON.stringify(arr))]
}

function Foo() {
    this.a = 1
}
var foo = new Foo()
bar = {a:1}

arr = [bar]
arr2 = duplicates(arr)
bar.a = 2
console.log(JSON.stringify(arr))