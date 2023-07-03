(function () {

    // per._name='bb';
    // 属性可以任意被修改会导致对象中的数据变得不安全
    class Person{
        /*
        public 可以在任意位置访问（修改）默认值
        private 私有属性 只可以在类的内部访问（修改）默认值
        protected 受保护属性 只可以在当前类和子类的内部访问（修改）默认值
         */
        private _name:string;
        private _age:number;
        constructor(name:string,age:number) {
            this._name = name;
            this._age = age;
        }
        /*
        属性的存取器：
            getter 方法用来读取属性
            setter 方法用来设置属性

         */
        getName(){
            return this._name
        }
        setName(value:string){
            this._name = value;
        }
        getAge(){
            return this._age
        }
        setAge(value:number){
            if(value>=0){
                this._age = value;
            }

        }


        // Ts中设置getter setter 方法  这样使用的时候可以直接 p.name获取或修改
        get name(){
            return this._name
        }
        set name(value:string){
            this._name=value
        }
        get age(){
            return this.age
        }
        set age(value:number){
            if(value>=0){
                this._age=value
            }

        }
    }

    const per = new Person('qq',11)



    console.log(per.getName());
    per.setName('11111');

    per.setAge(100);
    per.setAge(-1);

    per.name='hhh';
    per.age=123

    console.log(per)


    // 可以直接将属性定义在构造函数中  A和B是等价的
    class A{
        constructor(public name:string,public age:number) {

        }

    }

    class B{
        name:string;
        age:number

        constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
        }

    }

    const a=new A('test',1);
    const b=new B('test',1);
    console.log(a,b)

})()
