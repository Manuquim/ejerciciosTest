const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = ((valueInDollar * 127.9)/1.2).toFixed(2);
    //return the dollar value
    return Number(valueInYen);
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = ((valueInYen * 0.8)/127.9).toFixed(2);
    //return the dollar value
    return Number(valueInPound);
}

console.log(fromDollarToYen(100));
console.log(fromYenToPound(10000));
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound};