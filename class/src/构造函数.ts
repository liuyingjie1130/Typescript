class Dog {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        //构造函数中 this表示当前的对象实例
        this.name = name;
        this.age = age;
    }

    bar(){
        console.log(this,'wangwangwang')
    }

}

const dog1 = new Dog('小白',1)
const dog2 = new Dog('小黑',2)

dog1.bar();
dog2.bar();
