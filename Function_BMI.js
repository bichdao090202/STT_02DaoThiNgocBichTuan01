//Challenge 1, 2, 7

//Challenge1:BMI
//task1: Store Mark's and John's mass and height in variables
var Mark = { mass: 78, height: 1.69, name: "Mark" }
var John = { mass: 92, height: 1.95, name: "John" }
var Mark2 = { mass: 95, height: 1.88, name: "Mark" }
var John2 = { mass: 85, height: 1.76, name: "John" }

//task2: Calculate BMIs
function calcBMI(obj) {
    obj.BMI = parseFloat(obj.mass / (obj.height * obj.height)).toFixed(2)
    console.log(`BMI of ${obj.name}: ${obj.BMI}`);
    return obj.BMI;
}

//task3: Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
function markHigherBMIThanJohn(per1, per2) {
    calcBMI(per1);
    calcBMI(per2);
    return per1.BMI > per2.BMI;
}

//Challenge2:BMI
//task1-2: Print to the console, saying who has the higher BMI
//      Use a template literal to include the BMI values in the outputs
function printWhoHigherBMI(Mark, John) {
    var markHigherBMI = markHigherBMIThanJohn(Mark, John)
    if (markHigherBMI)
        console.log(`${Mark.name}'s BMI(${Mark.BMI}) is higher than ${John.name}'s(${John.BMI})!`)
    else
        console.log(`${John.name}'s BMI(${John.BMI}) is higher than ${Mark.name}'s(${Mark.BMI})!`)
}