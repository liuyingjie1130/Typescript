js:
易学易用 
容易埋下安全隐患，维护成本高

## 强类型与弱类型
类型安全：
	强类型语言：语言层面限制函数的实参类型必须与形参类型相同，不允许任意隐式类型转换
	弱类型语言：语言层面不会限制实参类型，允许任意的隐式类型转换

## 静态类型与动态类型
类型检查：
	静态类型语言：一个变量在声明时类型就是明确的，声明过后类型不允许再修改
	动态类型语言：在运行阶段才能明确类型，并且可以修改
## JavaScript自有类型系统的问题
1.弱类型的问题

```javascript
const obj = {}
setTimeout(()=>{
    obj.foo();//运行阶段才发现异常
},1000)

function sum(a,b){
    return a+b
}
console.log(sum(1,2));
console.log(sum('1','2'));//没有实参类型限制，函数功能改变

const obj = {};
obj[true] = 1;//属性名被转为字符串
console.log(obj['true']);//1
```
2.强类型的优势
①错误更早暴露
②代码更智能，编码更准确
③重构更牢靠
④减少类型判断
## Flow静态类型检查方案
Flow:javascript静态类型检查器工具
通过在代码中添加类型注解 标记每个变量或者参数是什么类型，flow根据类型注解检查是否存在类型异常
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209153735626.png)
1.flow使用
安装flow工具：yarn add flow-bin --dev
初始化flow配置：yarn flow init
在文件开头添加flow标记
yarn flow 检查
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209160553903.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
2.移除注解
使用完flow并不能马上运行，他只是能在编码阶段找出异常，想要能够运行还要移除flow注解
移除flow注解的方式：
①flow插件：flow-remove-types
安装： yarn add flow-remove-types --dev
使用：yarn flow-remove-types src -d dist  将除去flow注解的代码编译到dist文件
②babel
安装：yarn add @babel/core @babel/cli @babel/preset-flow --dev
配置babel：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209162104948.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
使用： yarn babel src -d dist


3.直观体现类型问题：VScode插件 Flow Language Support
可以直接在代码中体现
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209162510814.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
4.类型推断
根据代码中使用情况推断出变量类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209162859351.png)
5.类型注解

```javascript
//参数注解
function square(n: number) {
    return n * n
}
// 变量注解
let a: number = '1pp'

// 函数返回值注解
function foo(): number {
    return 'sss'
}

// 函数没有返回值时  注解
function bar() :void {
    
}
```
6.flow 原始类型

```javascript
const a: string = 'str';
const b: number = 100; //NaN // Infinity
const c: boolean = false;
const d: null = null;
const e: void = undefined;//特殊
const f: symbol = Symbol();
```
7.flow数组类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209170221581.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
8.对象类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209170819914.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
9.特殊类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209172619393.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
10.flow运行环境API

```javascript
const element: HTMLElement | null = document.getElementById('app')
```








## TypeScript语言规范与基本应用
### TS简介
TypeScript 以JavaScript为基础构建的语言，是JavaScript的超集,扩展了JavaScript并添加了类型
可以在任何支持JavaScript的平台中执行但是，不能被js解析器直接执行，需要执行**编译**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209173257888.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)

增加了什么：
类型：元组
添加es不具备的新特性：接口 抽象类 
丰富的配置选项：校验要求
强大的开发工具：类型提醒


### 1.环境搭建
安装： npm i typescript -g
提供了tsc命令
使用：tsc myTs.ts 

把es6新特性转换了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209174533212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209174701690.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)


### 2.ts类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219111557536.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021911450053.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/5bf160085c694363a077689ccb8531e4.png)
##### 字面量:限制变量的值就是该字面量的值
可以使用 | 连接多个类型（联合类型）
let a: 'man' | 'women'; // a可以是’man'或‘woman'
a='man';
a='women';
![在这里插入图片描述](https://img-blog.csdnimg.cn/76c36fb87c36455b9af963251373e891.png)
##### any:任意类型,相当于关闭了ts类型检测(不建议使用，可以使用unknown）
![在这里插入图片描述](https://img-blog.csdnimg.cn/f5a4e29ef3b4447595ad8ce10aa10ae1.png)
##### unknown：表示未知类型的值，相当于安全的any
![在这里插入图片描述](https://img-blog.csdnimg.cn/7e5c1135b2054542aeb991a6f13cb522.png)
##### void：空值或undefined，一般用于函数返回值
![在这里插入图片描述](https://img-blog.csdnimg.cn/dca647aa0f7344189558becdf5e7989d.png)
##### never：不能是任何值 永远不会返回结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/f0f7d3defdbf4412bd9b511980dd54d3.png)
##### object:任意js对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/b4251f3207f848e4afd3b002c0e32127.png)

##### array：js数组,声明：类型[]或Array<类型>
![在这里插入图片描述](https://img-blog.csdnimg.cn/a8c01b2d5b8444daaa9c16c2fc67f5ca.png)

##### tuple:元组(ts新增类型），固定长度的数组,声明[类型，类型...]
![在这里插入图片描述](https://img-blog.csdnimg.cn/76cc2bfb13c44867a491693369be394b.png)

##### enum:枚举(ts新增类型）
![在这里插入图片描述](https://img-blog.csdnimg.cn/4eabebbd301f47918563b50a32cb35f5.png)

### 3.注意
##### ts隐式类型推断
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219114644673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021911471020.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219114955178.png)
#####  |    表示或者（联合类型）
![在这里插入图片描述](https://img-blog.csdnimg.cn/1518bce7abb84bcdae66b45e8ad19b11.png)
##### & 表示同时满足
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9a132ea856a49bbb4ab9ed1d81d9a88.png)
##### 类型的别名
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ff63c3180fb4187b2faf5551021fda0.png)
### 3.ts编译
监视ts文件：tsc  app.ts -w
配置文件tsconfig.json
如果想使用配置文件中的配置就不能单独使用tsc命令执行一个文件，而是要在整个项目中使用 tsc
![在这里插入图片描述](https://img-blog.csdnimg.cn/1a3ba529819340e08793793cc4764fda.png)
### 4.ts类型断言：告诉typescript变量一定是什么类型的！
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219115719765.png)
### 5.ts接口
规范 契约
约束对象的类型（用来定义一个类结构）

```javascript
interface Post{
     title:string;
     content:string
 }

 function printPost(post:Post){
     console.log(post.title)
     console.log(post.content)
 }
 printPost({
     title:'ts',
     content:'hello'
 })
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219125918480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ab7cc92a6eb8405a835f1d8967a1032b.png)

### 7.类的属性封装
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219130704820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219131839689.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
只读属性：readonly
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021913215824.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0c8af8f267264a68841015544b743ddb.png)


### 8.类与接口：
通过implements关键字声明类使用哪些接口
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210219132851712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzk5MDc0,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/69ca401e87484d1f8b7bdf2fa179cd50.png)

### 9.抽象类
	抽象类 和其他类区别不大，就是不能用来创建对象；
    抽象类就是专门用来被继承的类
    抽象类可以添加抽象方法
    抽象方法没有方法体；
    抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写

![在这里插入图片描述](https://img-blog.csdnimg.cn/ac9fcb3f7cfe4a3e8e85311a1763a46e.png)

### 10.泛型
在定义函数或者类时，不确定类型时可以使用泛型   （相当于一个变量）
![在这里插入图片描述](https://img-blog.csdnimg.cn/40c91fe1be954139bf71af8aa11a1695.png)

### 11 使用webpack打包ts代码
基础依赖：cnpm i -D webpack webpack-cli typescript ts-loader 
![在这里插入图片描述](https://img-blog.csdnimg.cn/e11af98f359a4b178e88cccae95c21ca.png)

## 面向对象
### 类的简介
![在这里插入图片描述](https://img-blog.csdnimg.cn/5318b3b532714c81b0ca7f7ee453f18c.png)
### 构造函数和this
![在这里插入图片描述](https://img-blog.csdnimg.cn/300951f595144217974a2262cf40121f.png)
### 继承
![在这里插入图片描述](https://img-blog.csdnimg.cn/cdd687cca9d94026858c8facc238a87a.png)
## react 中使用typescript
创建项目：npx create-react-app react-ts --template typescript
相对于js发生的变化：

 1. 增加了tsconfig.json文件（ts配置文件）
 2. 组件扩展名变成了*.tsx
 3. src下增加了react-app.env.d.ts（react项目默认的类型声明文件）
![在这里插入图片描述](https://img-blog.csdnimg.cn/643bed7221ea4c128baa2aaf588b1ed0.png)
### 类型声明文件：*.d.ts 
定义在该文件里的类型，可以在项目中的任何地方使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/1b72134bacd44aa4bdf884ae75251051.png)

### 函数组件中使用ts
#### 组件的类型和属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/bfd6533d9d35460f9af9b76c827de2be.png)

#### 组件属性的默认值
![在这里插入图片描述](https://img-blog.csdnimg.cn/ca391b4ba2c646e1826665d0b029198e.png)
简化写法：
![在这里插入图片描述](https://img-blog.csdnimg.cn/25ba675a794e4327ba68f893ca47fa72.png)
#### 事件绑定和事件对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/843e7c7601294d72978b3efb2afb6c5b.png)查看事件类型的技巧：
在jsx中写事件处理程序（e=>{}),会自动弹出来event类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/f65ea193f7474453872986e2f5d1b60b.png)
### class 组件中使用ts
#### 类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/447a2687ae9b4c579aef93545d62db5f.png)
#### 属性、属性 默认值
![在这里插入图片描述](https://img-blog.csdnimg.cn/ea2891c36eba45c2a7b5e550ee0073e2.png)
#### 状态（state）
![在这里插入图片描述](https://img-blog.csdnimg.cn/8b25650ecc084b2094575660b58aad83.png)

