var sum = function(){
    var res = 0
    for(var el of arguments){
        if(typeof el !== 'number'){
            return undefined;   // 
        }else{
            res += el;
        }
    }
    return res
}

console.log(sum('1','2','3'))
console.log(sum(1,2,3))

console.log((function(){
    return typeof arguments;
  })())

 var foo = {
    bar: function() { return this.baz; },
    baz: 1
  };
  console.log((function(){
    return typeof arguments[0]();
  })(foo.bar));

  var f = (function f(){ return "1"; }, function g(){ return 2; })();
  console.log(typeof f);


  var n = ['1','2','3'];
  in = [];
  for(i = 0;i<3;i++){
      in[i] = fucnction(num){
          return n[i];
      }
  }

  console.log(in[0]())