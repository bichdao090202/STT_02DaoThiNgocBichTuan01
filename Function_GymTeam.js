//Challenge 3, 5

//Challenge3: Gymnastics teams
//task1: Calculate the average score of team (and task1 Challenge5)
function calcAverageScore(team) {
    var sum = 0;
    team.score.forEach(num => {
        sum += num;
    });
    team.avg = parseFloat(sum / team.score.length).toFixed(3);
    return team.avg;
}

//task2: Compare the team's average scores to determine the winner and print it to the console
function showWinner(team1, team2) {
    calcAverageScore(team1);
    calcAverageScore(team2);
    console.log(`Average Score of ${team1.name}: ${team1.avg}`);
    console.log(`Average Score of ${team2.name}: ${team2.avg}`);
    var res = team1.avg > team2.avg ? team1.name : team2.name;
    if (team1.avg == team2.avg) 
        console.log("Draw!");
    else
        console.log(`The winner is ${res}`);
}

//task3-4 bonus: requirement minimum score = 100 for team win
//      draw only happens when both teams have the same score and >= 100
function showWinnerBonus(team1, team2) {
    calcAverageScore(team1);
    calcAverageScore(team2);
    if (Math.max(team1.avg, team2.avg) < 100) {
        console.log(`Average Score of ${team1.name}: ${team1.avg}`);
        console.log(`Average Score of ${team2.name}: ${team2.avg}`);
        console.log("No team win");
    } else
        return showWinner(team1, team2);
}

//Challenge5: Gymnastics teams
//Task1: Create an arrow function 'calcAverage' to calculate the average of 3 scores
function calcAverage(scores) {
    var sum = 0;
    scores.forEach(num => {
        sum += num;
    });
    return sum / scores.length;
}

/*
    task3: Create function 'checkWinner' takes the average score of each team
    logs the winner to the console format: "Koalas win (30 vs. 13)"
    A team only wins if it has at least double the average score of the other team
*/
function checkWinner(avgDolphins, avgKoalas) {
    if (Math.max(avgDolphins,avgKoalas) < Math.min(avgDolphins,avgKoalas)*2)
        console.log("No team win!");
    else if (avgDolphins>avgKoalas)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else 
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
}











