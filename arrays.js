//Defining an array..
const array = [1,2,3,4,5,6,7,8,9];

//push..
console.log(array.push(10));
console.log(array);

//unshift -- add to the begining..
console.log(array.unshift(0));
console.log(array);


//pop 
console.log(array.pop());
console.log(array);


//shift -- remove the element from the first
console.log(array.shift());
console.log(array);


//index_of 
console.log(array.indexOf(4));

//last_index_of -- start searching from the last..
//Helpful in multiple occureence.
console.log(array.lastIndexOf(9));

//includes.. -- check whether the following arument is present in the array or not??
//IT CONTAINS THREE ARGUMENT FIRST -- NAME OF ELEMNET II- STARTING INDEX  III- ENDING INDEX..
const name = ['Sudu','Ajay','Priyansh','Rahju','Bittu'];
console.log(name.includes('Sudu'));
console.log(name.includes("OPOPO"));

//Making an object array..
let channel = [{
    name: "Apna College",
    subscriber: 100000,
    year_formed:2018,
    },
    {name:"Sudarshan",
    subscriber:190909090,
    year_formed:2012,

    },{
        name:"Apni Kaksha",
        subscriber:18787754,
        year_formed:2007,
    }
]
// Find return only one value which is first to return multiple value we ahave to use filter..
//Inline function use.. function(element)
console.log(channel.find(function(element)
{
    return element.subscriber>1800000;
}))
console.log(channel.filter(function(element)
{
    return element.year_formed>2007;
}))
//Arrow Function..
console.log(channel.find(element => element.subscriber<18787754));
console.log(channel.filter(element=> element.year_formed<2018));

//concat function..
let name_1 = ["Sudarshan","Bittu"];
let name_2 = ["Sandeep","Sonu"];

console.log(name_1.concat(name_2));

//spreader function (... [triple dot function])..
let name_3 = [...name_1,...name_2];

//join function..
let guun = ['b','i','t','t','u'];
console.log(guun.join("-"))

//split function..
console.log(guun.splice("-"));

//Map function..
//Useful in appling operation..
let cities = [
    {
        name:'Madhubani',population:20000000,
    },
    {
        name:'Dharabhanga',population:1500000,
    },{
        name:'Muzzafarpur',population:1000000,
    }
]
console.log(cities.map(element=> element.population/4));