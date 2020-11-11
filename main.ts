export {}
let message="hello";
console.log(message);

let isBeginner:boolean = true;
let total:number =0;
let name:string ='prajwal';



let sentence:string=`my name is ${name}`;
console.log(sentence)

let n:null = null;
let u:undefined= undefined;

let list1:number[] =[1,2,3];

let list2:Array<number> = [1,2,3];

let person1:[string,number] =["m",22]

enum Colors{
    red=2,green=3,blue=4
}

let c:Colors =Colors.green;
console.log(c);

let random:any =10;
random=true;

let myVariable: unknown =10;



const person :{
    name:string;
    age:30;
}={
    name:"yyy",
age:30,
}
//better 
const persons ={
    namey:"ss",
    age:30
}
let tuple: [string,number];
tuple=["a",2]

function combine(a: number | string,b:number | string){
    let result;
    if(typeof a === 'number' && typeof b==="number"){
        result=a+b;
    }else{
  result =a.toString()+b.toString();
    }
    return result;

}
console.log(combine(20,"s"))