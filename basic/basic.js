console.log('hello ts');
var a;
a = 1;
a = '12'; //类型报错也能编译通过
var b;
b = 'str'; // 默认编译成es3 let 变var
var flag = true;
flag = 1; // 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
// 参数类型检测
function fn(a, b) {
    return a + b;
}
console.log(fn(1, '2'));
