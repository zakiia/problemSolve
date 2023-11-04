//problem 3
function picnicBudget(person){
    const firstPerson = 5000;
    const secondPerson = 4000;
    const thirdPerson = 3000;

    if(person <= 100){
        const price = person * firstPerson
        return price;
    }
    else if(person <= 200){
        const first100Person = 100 * firstPerson;
        const restPerson = person - 100;
        const second100Person = restPerson * secondPerson;
        const secondPrice = first100Person + second100Person;
        return secondPrice;
    }
    else{
        const first100Person = 100 * firstPerson;
        const second100Person = 100 * secondPerson;
        const restPerson = person - 200;
        const restPrice =first100Person + second100Person + restPerson;
        return restPrice; 
    }
}
const totalPrice = picnicBudget(225);
console.log(totalPrice);