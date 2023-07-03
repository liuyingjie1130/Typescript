/*
object :任意js对象,不常用
 */

// let a: object;
// a = {};
// a = function () {
//
// }
//
// // {}规定对象有哪些属性
// let b: {name:string};
// b={name:'qq',age:12};
//
// let c: {name:string,age:number};
// c={name:'qq',age:12};
//
// // ?表示属性可选
// let d: {name:string, age?:number};
// d = {name:'qq' }
//
// // [propName:string]:any表示任意类型的属性
// let e:{name:string,[propName:string]:any};
// e={name:'qq',age:11,sex:'man',height:180}
//
// // 设置函数结构声明
// let f:(a:number,b:number)=>number
// f = function (m,n) {
//     return m+n
//
// }


/*
array :任意js数组
声明：类型[]或Array<类型>
 */

// let a:string[];
// a=['q',1]
//
// let b:Array<number>;
// b=[12,'1']
//
// let c:any[];
// c=[1,2,'4']
//
// let d:Array<any>;
// d=[1,2,'3']


/*
tuple :元组(ts新增类型），固定长度的数组
声明[类型，类型...]
 */

// let a: [number,number];
// a=[1,2,3]


/*
enum :枚举(ts新增类型）
 */

// enum gender{
//     male,
//     female,
//     other
// }
// let a: {name:string,gender:gender};
// a={
//     name:'aa',
//     gender:gender.female
// }

/*
|  表示或者（联合类型）*/

// let a: 'man' | 'women'; // a可以是’man'或‘woman'
// a='man';
// a='women';

/*
& 表示同时满足
 */

let a: {name:string} & {age:number};
a={name:'qq',age:11}

/*
类型别名
 */

type myType = string;
let a:myType;
a=12;
a='123'

type myType1 = 1|2|3|4|5;
let b:myType1;
b=1
