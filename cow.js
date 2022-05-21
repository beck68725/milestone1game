//score
let myScore = 0
let wrongAnswer = 0

function myFunction1(){
    let firstAnswer  = window.prompt('True or False--Do cows drink almost a bathtub of water a day?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`You are correct!!`);
        console.log(myScore + 1);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`This is actually true. Cows drink 100 liters of water a day, which is almost the same as a bathtub full of water.`);
        console.log(wrongAnswer + 1);
    }
}

function myFunction2(){
    let firstAnswer  = window.prompt('How many different breeds of cattle are in the world? a. 2, b. 257, c. over 1000?')
        if(firstAnswer === 'a'){
            let secondAnswer = window.alert(`That is not correct. Try again.`);
            console.log(wrongAnswer + 1);
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.alert(`That is not correct. Try again.`);
            console.log(wrongAnswer + 1);
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.alert(`over 1000 is correct and there are over 1.4 billion cattle in the world.`);
            console.log(myScore + 1);
        }
}

function myFunction3(){
    let firstAnswer  = window.prompt('True or False--Are baby cows called kids?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`This is not true. Kids are actually baby goats.`);
        console.log(wrongAnswer + 1);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`Baby cows are actually called calves.`);
        console.log(myScore + 1);
    }
}

myScore()
wrongAnswer()