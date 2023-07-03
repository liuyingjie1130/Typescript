/*
字面量 限制变量的值就是该字面量的值,有点像const
*/

// let a: 12;
// a = 13;
//
// // 应用： 使用 | 连接多个类型（联合类型）
// let b: 'man' | 'women';
// b = 'man';
//
// let c: number | boolean;
// c = 1;
// c = false;

/*
any  任意类型，相当于关闭了ts类型检测
*/

// let a: any;
// a = 123;
// a = false;
// a = '123';
//
// // 只声明变量不指定类型也相当于any(隐式any)
// let b;// let b:any;
// b = 1;
// b = '1';
// b = true;


/*
 unknown 表示未知类型的值，相当于安全的any
 */
// let a: unknown;
// a = 123;
// a = false;
// a = '123';
//
// let b: any;
// b = '123';
//
// let c: string;
// c = b; // any类型的可以赋值给string类型
// c = a; // unknown类型的赋值给string类型会提示
//
// // 解决提示：
// // 1.if 判断
// if(typeof a === 'string'){
//     c = a;
// }
// // 2.类型断言 告诉解析器变量的实际类型
// c = a as string;  // 或者 c = <string>a;   告诉解析器a的类型就是String
//

/*
void：空值，一般用于函数返回值
*/

// function f() :void{
//     return 1
//     return null
//     return undefined
// }


/*
never：不能是任何值
*/

function f1(): never{
    // return 1
    // return null
    return undefined
}

// function f2(): never{
// }
//
//
// function f3(): never{
//     throw new Error('err')
// }


