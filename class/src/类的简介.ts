class Person {
    // 类属性（静态属性） 可以直接通过类访问
    static  sex:number = 0;
    // static  readonly  sex:number = 0;//只读的静态属性

    // 实例属性  通过对象实例访问
    name:string = 'a';
    age:number = 1;
    readonly level:number = 1; //只读属性 不能修改

    //类方法
    sayHello(){
        console.log('hello')
    }

    //实例方法
    static sayHello(){
        console.log('hello')
    }
}
const per = new Person()
// per.level = 2; //readonly 只读
console.log(per,Person.sex )

per.sayHello();
Person.sayHello();
