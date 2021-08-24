
class Person {
    constructor(name='Anonymous',age=0){
        this.name = name;
        this.age = age;
    }
    getGreetings(){
        return `Hi I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description+= `Their major is ${this.major}`;
        }
        return description;
    }
   
}


class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreetings(){
        let greet = super.getGreetings();
        if(this.hasHomeLocation()){
            greet += `I am visiting from ${this.homeLocation}`;
        }
        return greet;
    }
}
const me = new Traveler('Aniruddha Pattewar',27,'Pusad');
console.log(me.getGreetings());

const other = new Traveler();
console.log(other.getGreetings());