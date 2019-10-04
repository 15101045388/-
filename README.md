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

区分大小写
linux 命令
ls -a 查看所有目录 包括隐藏目录   隐藏目录的文件名称前面有 . 

创建文件 mkdir  

复制目录 cp -R 要复制的文件 复制后的文件名称
cp -R aaa bbb

删除文件 
rm 文件名称
删除文件目录
rm -r 文件目录名称

pwd命令可以查看当前所在目录

window
dir 查看当前文件夹下的目录 有dir标记的是文件夹，没有标记的是文件
cd 进入目录
