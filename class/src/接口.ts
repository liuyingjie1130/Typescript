(function () {
    type myType={
        name:string,
        age:number
    }
    const obj1:myType = {
        name:'11',
        age:1
    }

    /*
    接口用来定义一个类结构/对象结构,一个类/对象中包含哪些属性和方法，
    同时接口也可以当成类型声明去使用
    相比于type 类型声明，接口可以重名，会合并属性
     */
    interface myInterface{
        name:string;
        age:number

    }

    interface myInterface{
        gender:string
    }

    const obj:myInterface = {
        name:'qq',
        age:12,
        gender:'man'
    }

    /*
    接口只定义对象的结构，不能有实际值，在接口中所有的方法都是抽象方法
     */

    interface myInter{
        name:string;
        sayHello():void;
    }

    // 实现接口
    class myClass implements myInter{
        name: string;
        constructor(name:string) {
            this.name = name
        }

        sayHello(): void {
            console.log('hello')
        }

    }
    /*
        接口类似抽象类，但是有些不同：
        抽象类里可以定义非抽象方法，接口里只能写抽象方法；
        抽象类实现用extends,接口实现用implements

     */


})()
