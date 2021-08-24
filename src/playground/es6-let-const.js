var nameVar="Aniruddha";
var nameVar="andrew";
console.log('nameVar',nameVar);

let nameLet="dsadads";
nameLet="wqeqe";
console.log('nameLet',nameLet);

const nameConst="fsfsfsafs";
// const nameConst="fdsfsdf"
console.log(nameConst);

//function and block level scope

var a = "Aniruddha pattewar"
function FrName(a){
    var firstName=a.split('')[0];
    return firstName;
}
FrName(a);
console.log(firstName);