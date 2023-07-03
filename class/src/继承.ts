(function () {
    class Animal {//父类
        name:string;
        age:number;
        constructor(name:string,age:number) {
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log('动物在叫')
        }

    }

    class Dog extends Animal{ //子类  拥有父类的所有属性和方法
        sayHello(){ // 会覆盖父类的方法（方法的重写）
            console.log('wangwangwang')
        }

    }

    class Cat extends Animal{ //子类
        sayHello(){
            console.log('miaomiaomiao')
        }
    }

    class Pig extends Animal{
        color:string;
        constructor(name:string,age:number,color:string) {
            // 在子类中写了构造函数，必须对父类构造函数进行调用
            super(name,age);
            this.color = color;
        }
        sayHello(){
            // 在方法中，super表示当前类的父类
            super.sayHello();
        }
    }

    const dog = new Dog('dog',1);
    const cat = new Cat('cat',1);
    const pig = new Pig('pig',1,'pink');

    cat.sayHello();
    console.log(pig)




})()
