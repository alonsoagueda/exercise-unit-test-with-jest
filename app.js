const sum = (a,b) => {
    return a + b
}


// EURO TO USD
function euroToUsd (euro) {
   if (euro < 0){
    console.log ("you cannot have a neg value")
    return 
   }
    return euro * 1.2
}
console.log(euroToUsd(1))
module.exports = {sum,euroToUsd,}


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

