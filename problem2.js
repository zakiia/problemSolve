//problem 2
function pandaCost(singaraQuantity, samusaQuantity, jilapiQuantity){

    const singaraPrice = 7;
    const samusaPrice = 10;
    const jilapiPrice = 15;

    const singaraQuantityPrice = singaraQuantity * singaraPrice;
    const samusaQuantityPrice = samusaQuantity * samusaPrice;
    const jilapiQuantityPrice = jilapiQuantity * jilapiPrice;

    const totalPrice = singaraQuantityPrice + samusaQuantityPrice + jilapiQuantityPrice;

    return totalPrice;
}
const totalQuantity = pandaCost(7,3,5);
console.log(totalQuantity);