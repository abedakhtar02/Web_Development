
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
 