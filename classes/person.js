// Your code here
//instance variables that include `firstName`, `lastName`, and `age`
class Person{
  constructor (firstName, lastName,age){
    this.firstName = firstName 
    this.lastName = lastName 
    this.age  = age
    //Person.introducePeople(this)
   }
   
  //an instance method called `introduce` that will introduce the person by using
 introduce() {
  console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
 }
//"Hi, I'm `<firstName>` `<lastName>`, and I'm `<age>` years old."
 //a static method called `introducePeople` that will take in an array of `Person` instances. 
 static introducePeople(arrperson) {
  //Have `introducePeople` throw an Error with a message of "introducePeople only takes an array as an argument." if the argument is not of type `Array`.
  if (!Array.isArray(arrperson)) {
    throw new Error("introducePeople only takes an array as an argument.")
  }
  for (const p of arrperson) {
      if (!(p instanceof Person)) {
      throw new Error("All items in array must be Person class instances.")
      
    }
      p.introduce()
    }
  }
}
 //static arrperson =[]
  //static introducePeople(info) {
    //let people =[]
    //if (info !== undefined) {
    //this.people.push(info)};
    //return this.people
  //}

 
let personA = new Person('Apple','Wong',5)

//let personB = new Person('Peanut','Law' ,1)

personA.introduce()
person = new Person("kristen", "chauncey", 38)
person.introduce()
//console.log(Person.introducePeople('person1'))
//Person.introducePeople([personA, personB]);
//console.log(Person.introducePeople(['personA', 'personB']))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}