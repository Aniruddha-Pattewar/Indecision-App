var getFirstname = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstname('Mike smith'));

var getFirstname = (fullName) => fullName.split(' ')[0];

console.log(getFirstname('Mike smith'));