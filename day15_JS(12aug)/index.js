
// console.log('Namasteee v5.0!')

// let a=true;
// console.log(a)


// let age=19;
// alert(age>=18? 'vote':'novote');


console.log('i'+"'"+'m abed');

// <-----creating an object using Factory function------>

// function createRect(l,b) {
//     let rectangle={
//         height:l,
//         width:b,
     
//         draw:function(){
//          console.log('draw');
//         }
//      };
//      return rectangle;  
// }
//     let length = prompt("enter length","length");
//     let breadth = prompt("enter breadth","breadth");

//     let rectangleobj1 = createRect(length,breadth);


// <-----creating an object using Factory function------>


function Rectangle(l,b) {
    this.length = l;
    this.breadth = b;

    this.draw=function(){
        console.log('draw');
    }
}
let rectObj = new Rectangle(3,5);

rectObj.color="yellow";

delete rectObj.length;
 
let a=5;
let b=a;

a++;

console.log(a);
console.log(b);


// let p={value : 10};
// let q=p;

// p.value++;
// console.log(p);
// console.log(q);



let rectangle={
            height:1,
            width:2
}  

// for(let key in rectangle){
//     console.log(key+":", rectangle[key]);
    
// }

// for(let key of Object.keys(rectangle)){
//     console.log(key);
    
// }
// for(let key of Object.entries (rectangle)){
//     console.log(key);
    
// }


let src={a:10,b:11,c:12}
console.log(src);

console.log('// spread');
let dest1={...src};
console.log(dest1);


console.log('// assign');
let dest2=Object.assign({},src);
console.log(dest2);

console.log('//iteration');

let dest3={};
for(let key in src){
    dest3[key]=src[key];
}
console.log(dest3);


