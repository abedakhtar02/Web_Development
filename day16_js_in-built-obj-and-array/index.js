
console.log('hello');

let firstname='abed';

let lastname= new String('Akhtar');

let date1 =  new Date();


date1.setFullYear(2009)
console.log(date1);

// <--------------->

let num =[1,4,2,7,5];

console.log(num);

num.push(1,2,3,4,5)
num.unshift(9,8)
num.splice(3,0,'number')

console.log(num); 
// searching

console.log(num.indexOf(7));
  
let courses=[
    {name:'javascript',price:100,level:'beginner'},
    {name:'python',price:200,level:'intermediate'},
]
let course = courses.find(course => course.name=== 'javascript');
console.log(course);

