//Challenge 4, 6, 8

//Challenge4: Tip
//task1: Calculate the tip, depending on the bill value
function calcTip(billValue){
    var tip = (billValue>=50 && billValue<=300)?15:20;
    return tip*billValue/100;
}

//task2: Print a string to the console containing the bill value, the tip, and the final value
function printFinalValue(billValue){
    var tipMoney = calcTip(billValue);
    var total = billValue+tipMoney;
    console.log(`The bill was ${billValue}, the tip was ${parseFloat(tipMoney).toFixed(2)}, and the total value ${parseFloat(total).toFixed(2)}`);
}

//Challenge8: Tip
//task4: calculates the average of all numbers in the given array
function calcAverage (arr){
    return (arr.reduce((acc,num) => {
        return acc+num;
    },0))/arr.length;
}