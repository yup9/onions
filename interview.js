var foo = function(a) {
  console.log(a);
  var a = 2;
  function a() {}
  console.log(a);
}

foo(2);

//问输出结果 考查函数提升


var getId = document.getElementById;
getId('id');

/*
问getId是否能正确运行，为什么？
不能，当把document.getElementById方法赋予一个变量的时候 
函数失去了它的context(document). 此时方法内的context(this)指向window
如果要正常工作 可这样
var getId = document.getElementById.bind(document);
或者
var getId = document.getElementById;
getId.call(document, id);
*/



var z = 10;
function foo () {
  console.log(z);
}

foo();

(function() {
  var z = 20;
  foo();
}())


(function(callback) {
  var z = 30;
  console.log('haha')
  callback();
}(foo))

//问输出结果

/*
问以下代码会报什么错?
运行构造函数时掉了new关键字，将其当作普通函数来使用，this指向window
name, age 变成了全局变量；返回结果 undefined被赋值給lilei

应该怎么改？
var lilei = new Person('lilei', 19)
或者
var Person = function(name, age) {
  var obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

var lilei = Person('lilei', 19);
*/

var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

var lilei = Person('lilei', 19);


var wrapElements = function(a) {
  var results = [];
  for (var i = 0, lens = a.length; i < lens; i++) {
    results[i] = function () {
      console.log(i);
      return a[i];
    }
  }
  return results
}

var elements = wrapElements(['a', 'b', 'c', 'd']);
var foo = elements[0];
foo();

/* 
输出是？为什么？
undefined, 因为当foo执行时， 已经结束循环i = a.length, 
a[4]为undefined;


如何修改可达到预期？
var wrapElements = function(a) {
  var results = [];
  for (var i = 0, lens = a.length; i < lens; i++) {
    results[i] = (function (index) {
      return function() {
        console.log(i);
        return a[index];
      }
    }(i))
  }
  return results
}

*/






