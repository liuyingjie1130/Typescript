(function () {
    /*
    抽象类 和其他类区别不大，就是不能用来创建对象；
    抽象类就是专门用来被继承的类
    抽象类可以添加抽象方法

     */

    abstract class Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }

        /*
        抽象方法没有方法体；
        抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写

         */
        abstract sayHello():void

    }

    class Dog extends Animal{
        sayHello(){
            console.log('wangwangwang')
        }

    }

    class Cat extends Animal{ // 没有sayHello会报错
        sayHello(){
            console.log('miao')
        }

    }

    const dog = new Dog('dog');
    dog.sayHello();









})()
