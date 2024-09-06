function run() {
    console.log("running");
    
}
run();


let person = {
    fName : 'abed',
    lName : 'akhtar'
}

// console.log(person);

function fullName() {
    return `${person.fName} ${person.lName}`
}

console.log(fullName());

//---------------------------------


let person2 = {
    fName : 'Abed',
    lName : 'Akhtar',

    get fullName(){
        return `${person2.fName} ${person2.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

person2.fullName='aryan samal'

console.log(person2.fullName);
