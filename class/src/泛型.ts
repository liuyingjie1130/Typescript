// function fn(a:any): any {
//     return a;
//
// }

/*
在定义函数或者类时，不确定类型时可以使用泛型
相比于any的好处：
any相当于屏蔽类型检测；
any不能保证参数类型和返回值类型一致
 */

function fn<T>(a:T): T {
    return a
}

fn(10);//不指定泛型，ts可以自动进行类型推断
fn<string>('hello')//指定泛型

// 可以同时指定多个
function f1<T,K>(a:T): T{
    return a
}
f1<string,number>('10')


// T extends inter表示泛型必须是inter实现类

interface Interface {
    length:number;
}

function f2<T extends Interface>(a:T): number {

    return a.length

}

f2('123');
// f2(1);
f2({length:1});


