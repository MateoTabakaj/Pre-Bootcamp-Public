const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
//the name value is helded by the otherName and will say name is not defined
console.log(otherName);

