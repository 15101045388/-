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


面向对象的概念
1、软件危机 -> 软件工程学
面向对象目标-》封装继承多肽

前端开发的定义类、对象。
什么是类-》 人类 就是一类
什么是对象-》 对象具体到某个人

面向对象的特性：
1、对象行为-》方法
2、对象状态-》属性
3、对象标识

抽象一个类
类的声明
成员属性
成员方法

类声明
语法：
【修饰符】class 类型{  // class关键字加空格后加上类名
  【成员属性】  // 也叫成员变量
  【成员方法】  // 也叫成员函数
}

完整格式
【修饰符】class 类名 【extends 父类】【implements 接口1，【接口2...】】{
  【成员属性】  // 也叫成员变量
  【成员方法】  // 也叫成员函数
}

成员属性：
格式： 修饰符 $变量名【=默认值】  public $name = "zhangsan";

实例化对象
用new关键字
User user = new User();
$引用名 = new 类名();

特殊对象引用this

<?php
/**
* 类的声明
**/
class Person
{
  public $age;
  public function say($word){
    echo "she say {$word}";
  }
  public function info(){
    $this -> say("Hi");
    return $this -> age;
  }
}

$xiaohong = new Person();
$xiaohong -> age = 22;
$xiaohong -> info();
$age = $xiaohong -> info();
echo "<br/>";
echo $age;

?>

