// Making a constructor..
function Source(title,section)
{
    this.course_name = title,
    this.parts = section,
    this.enroll= function(){
        console.log("You are sucessfully enrolled");
    }
}
//Duplicating a function using a constructor..
const course_1 = new Source('JS' ,'4');
console.log(course_1);
console.log(course_1.enroll())
const course_2 = new Source('C++' ,'10');
console.log(course_2);
console.log(course_2.enroll())
 
// copying a constructor.. #Method - 01
const hago = {...course_1}
console.log(hago);
// copying a constructor .. #Method - 02
const paga = Object.assign({},course_2);


