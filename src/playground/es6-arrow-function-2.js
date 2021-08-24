// arguments are no longer bound in arrow function means we can't use arguments object in arrow function

// const add = function (a,b){
//     console.log(arguments);
//     return a+b+arguments[2];
// }

const add = (a,b) => {
    // console.log(arguments);
    return a+b;
}

console.log(add(1,2,3));

// this keyword is no longer bound in arrow function means no need to bind this keyword

const user = {
    name:"Aniruddha Pattewar",
    cities:["pune","mumbai","mysore"],
    printPlacesLived: function () {
        // console.log(this.name);
        // console.log(this.cities);

    return this.cities.map ((city)=> this.name + ' has lived in '+city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers:[1,2,3],
    multiplyBy:2,
    multiply(){
        return this.numbers.map((num)=> num*this.multiplyBy);
    }
}

console.log(multiplier.multiply());