构造函数的赋值优先于原型链

this.a = 20;
function p(){
  console.log(this.a);
  this.a = 30;
}
p.prototype.a = 10;
console.log((new p()).a);

<p>
use strict 严格模式
指定代码在严格条件下执行。
</p>

function test(m){
  m.v = 40;
}

var m = {k:30};
test(m);
alert(m.v);
输出40  
解释： 函数的参数都是按值传递，把函数外部的值赋值给函数内部的参数也就是把一个变量的值，复制到另一个变量中。

function addTen(){
  num += 10;
  return num;
}

var count = 20;
var result = addTen(count);
alert(count);  // -20
alert(result); // -30


function test(){
  var a = 0;
}
console.log(this.a);


