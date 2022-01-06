// let str:string="你好，ts";
// console.log(str);

// let a:number=123;
// console.log(a);

// function run():string{
//     return 'run';
// }

// var oBox:any=document.getElementById('box');
// oBox.style.color='red';

//匿名函数
// var fun2=function():number{
//     return 123;
// }

// alert(fun2());

// function getInfo(name:string,age:number):string{
//     return `${name}---${age};`
// }
// alert(getInfo('张三',20));

// var getInfo=function(name:string,age:number):string{
//     return `${name}---${age};`
// }

// alert(getInfo('张三',20));

//没有返回值方法
// function run():void{
//     console.log('run')
// }
// run()

// function getInfo(name:string,age?:number):string{
//     return `${name}---${age};`
// }
// alert(getInfo('张三'));

// function sum(a:number,...b:number[]):number{
//     var sum=0;
//     for(var i=0;i<b.length;i++){
//         sum+=b[i];
//     }
//     return sum;
// }
// alert(sum(1,2,3))

//ts中的重载
// function getInfo(name:string):string;

// function getInfo(age:number):number;

// function getInfo(str:any):any{
//     return str;
// }

// alert(getInfo(15));

// setTimeout(()=>{
//     alert('run')
// },1000)


// function getInfo(name:string,age:number):string{
//     return  `${name}---${age}`
// }

// alert(getInfo('san',12));

// function sum(result:number[]){
//     var sum=0;
//     for(var i=0;i<result.length;i++){
//         sum+=result[i];
//     }
//     return sum;
// }

// alert(sum([1,2,3]))

//剩余参数
// function sum(...result:number[]){
//     var sum=0;
//     for(var i=0;i<result.length;i++){
//         sum+=result[i];
//     }
//     return sum;
// }

// alert(sum(1,2,3))

// class Person{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }

//     run():void{
//        alert(this.name);
//     }

// }
// var p=new Person('张三');
// p.run;

// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }

//     getName():string{
//         return this.name;
//     }

//     setName(name:string):void{
//         this.name=name;
//     }

// }
// var p=new Person('张三');
// p.setName("李四");
// alert(p.getName());

//extend super 
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var p=new Person('王五');
// alert(p.run())

// class Web extends Person{
//     constructor(name:string){
//         super(name);  /* 初始化父类的构造函数 */
//     }
// }
// var w=new Web("李四");
// alert(w.run())

// class Person{
//     public name:string;
//     static sex="男";
//     constructor(name:string){
//         this.name=name;
//     }
//     run(){  //实例方法
//         alert(`${this.name}在运动`);
//     }
//     work(){
//         alert(`${this.name}在工作`);
//     }
//     static print(){
//         alert('print方法')
//     }
// }

// var p=new Person('张三');
// alert(p.run())

// Person.print();
// alert(Person.sex);

// abstract class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     abstract eat():void;
// }
// class Dog extends Animal{
//     eat(){
//         alert('猫吃鱼')
//     }
// }
// var d=new Dog('小猫');
// d.eat();

//传入对象的约束
// interface FullName{
//     firstName?:string;
//     secondName:string;
// }
// function printName(name:FullName){
//     console.log(name.firstName+'---'+name.secondName);
// }
// var obj={
//     age:20,
//     firstName:'张',
//     secondName:'三'
// }
// printName(obj);
// printName({secondName:'san'})

// interface Config{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string;
// }

// function ajax(config:Config){
//     var xhr=new XMLHttpRequest();
//     xhr.open(config.type,config.url,true);
//     xhr.send(config.data);
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4 && xhr.status==200){
//             console.log('成功');
//             if(config.dataType='json'){
//                 console.log(JSON.parse(xhr.responseText))
//             }else{
//                 console.log(xhr.responseText)
//             }
//         }
//     }
// }

// ajax({
//     type:'get',
//     data:'name=zhangsan',
//     url:'http://a.itying.com/api/productlist',//api
//     dataType:'json'
// })
 
//加密的函数类型接口
// interface encrypt{
//     (key:string,value:string):string;
// }
// var md5:encrypt=function(key:string,value:string):string{
//     //模拟操作
//     return key+value;
// }
// md5('name','zhangsan');

// var sha1:encrypt=function(key:string,value:string):string{
//     //模拟操作
//     return key+'---'+value;
// }
// console.log(sha1('name','lisi'));

// interface UserArr{
//     [index:number]:string
// }

// var arr:UserArr=['123','1234'];
// console.log(arr[1]);

//类类型接口：对类的约束  和 抽象类有点类似

// interface Animal{
//     name:string;
//     eat(str:string):void;
// }

// class Dog implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }

//     eat(){
//         console.log(this.name+'吃粮食');
//     }
// }

// var d=new Dog('小黑');
// d.eat();

// class Cat implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     eat(food:string){
//         console.log(this.name+'吃'+food)
//     }
// }

// var c=new Cat('小花');
// c.eat('老鼠');

// interface Animal{
//     eat():void;
// }
// interface Person extends Animal{
//     work():void;
// }

// class Programer{
//     public name:string;
//     constructor(name:string){
//         this.name=name;
//     }

//     coding(){
//         console.log(this.name+'写代码');
//     }
// }

// class Web extends Programer implements Person{
//     constructor(name:string){
//         super(name);
//     }
//     eat(){
//         console.log(this.name+'喜欢吃馒头');
//     }
//     work(){
//         console.log(this.name+'写ts代码')
//     }
// }

// var w=new Web('小李');
// w.eat();
// w.work();
// w.coding();

// function getData<T>(value:T):T{
//     return value;
// }
// getData<number>(123);
// getData<string>('12345');

// class MinClass{
//     public list:number[]=[];
//     add(num:number){
//         this.list.push(num);
//     }
//     min():number{
//         var minNum=this.list[0];
//         for(var i=0;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum=this.list[i];
//             }
//         }
//         return minNum;
//     }
// }

// var m=new MinClass();
// m.add(5); 
// m.add(3); 
// m.add(2); 
// m.add(4); 

// alert(m.list);
// alert(m.min())

//类的泛型
// class MinClass<T>{
//     public list:T[]=[];
//     add(value:T):void{
//         this.list.push(value);
//     }
//     min():T{
//         var minNum=this.list[0];
//         for(var i=0;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum=this.list[i];
//             }
//         }
//         return minNum;
//     }
// }
// var m1=new MinClass<number>();   /*实例化类 并且制定了类的T代表的类型是number */
// m1.add(1);
// m1.add(4);
// m1.add(3);
// m1.add(5);
// alert(m1.min());
// alert(m1.list);

// var m2=new MinClass<string>();   /*实例化类 并且制定了类的T代表的类型是string */
// m2.add('a');
// m2.add('c');
// m2.add('b');
// alert(m2.min());
// alert(m2.list);

//函数类型接口
// interface ConfigFn{
//     (value1:string,value2:string):string;
// }
// var setData:ConfigFn=function(value1:string,value2:string):string{
//     return value1+value2;
// }
// setData('name','张三');

//泛型接口
// interface ConfigFn{
//     <T>(value:T):T;
// }

// var getData:ConfigFn=function<T>(value:T):T{
//     return value;
// }

// class User{
//     username:string | undefined;
//     password:string | undefined;
// }

// class MysqlDb{
//     add(user:User):boolean{
//         console.log(user);
//         return true;
//     }
// }

// var u=new User();
// u.username='张三';
// u.password='12345';


// var Db=new MysqlDb();
// Db.add(u);

/*
    功能:定义一个操作数据库的库，支持 Mysql Mssql MongoDb
    要求1：Mysql MsSql MongoDb功能一样 都有add update delete get方法
    注意：约束统一的规范，以及代码重用
    解决方案：需要约束规范所以要定义接口，需要代码重用所以要用到泛型
    1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
    2. 泛型 通俗理解：泛型就是解决 类 接口 方法的复用性
*/

// interface DBI<T>{
//     add(info:T):boolean;
//     update(info:T,id:number):boolean;
//     delete(id:number):boolean;
//     get(id:number):any[];
// }

// class MysqlDb<T> implements DBI<T>{
//     add(info: T): boolean {
//         throw new Error("Method not implemented.");
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         throw new Error("Method not implemented.");
//     }

// }

// //操作用户表 定义一个User类和数据表做映射
// class User{
//     username:string|undefined;
//     password:string|undefined;
// }

// var u=new User();
// u.username='张三';
// u.password="123";


// var oMysql=new MysqlDb<User>();   //类作为参数来约束数据传入的类型
// oMysql.add(u);

//装饰器
// function logClass(params:any){
//     console.log(params);
//     //params 就是当前类
//     params.prototype.apiUrl='动态扩展的属性';

//     params.prototype.run=function(){
//         console.log('我是一个run方法')
//     }
// }
// @logClass
// class HttpClient{
//     constructor(){

//     }
//     getData(){

//     }
// }

// var http:any=new HttpClient();
// console.log(http.apiUrl);
// http.run();

function logClass(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any='我是修改后的数据';
    }
}

@logClass
class HttpClient{
    public apiUrl:string|undefined;
    constructor(){
        this.apiUrl='我是构造函数里面的apiUrl';
    }
    getData(){
        console.log(this.apiUrl);
    }
}
var http=new HttpClient();
http.getData();