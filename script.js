//Exercise 1 - Classes
//Create a class called `Person` with the following properties and methods:
//1 - Properties:
//`name` (string)
// `age` (number)
//2 - Methods:
//introduce()`: This method should return a string introducing the person, for example: "Hi, my name is John and I am 25 years old."
 class Person{
    constructor(name , age){
        this.name = name ;
        this.age = age ;
    }
    introduce(){
        return `Hi,my name is ${this.name} and I am ${this.age} years old.`;

    }
 }

//Exercise 2 - This

//Create a new object using the `Person` class you defined in Exercise 1. Name the object `person1` and set the `name` and `age` properties accordingly. Then, create a function called `describePerson` that takes a callback function as an argument. Inside the `describePerson` function, call the callback function with `person1` as the `this` context.
const person1 = new Person("Sannit", 25);

const describePerson= (callback)=>{
  return callback.call(person1);
}
 console.log(describePerson(person1.introduce));

//Exercise 3 - Promises

//Write a function called `wait` that takes a number as an argument (representing milliseconds) and returns a Promise. The Promise should resolve after the given number of milliseconds, using `setTimeout`. The resolved value can be anything you choose.

const wait = (milliseconds) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve (`How to mannage promises`)
      }  , milliseconds )
    });
  }

wait(2000)
.then((result) => {
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});

