//score
let myScore = 0;
let wrongAnswer = 0;
document.getElementById("cow2").disabled=true;
document.getElementById("cow3").disabled=true;

function myFunction1(){
    let firstAnswer  = window.prompt('True or False--Do cows drink almost a bathtub of water a day?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`You are correct!!`);
        myScore++;
        console.log(myScore);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`This is actually true. Cows drink 100 liters of water a day, which is almost the same as a bathtub full of water.`);
        wrongAnswer++;
        console.log(wrongAnswer);
    }
    document.getElementById("cow1").disabled=true;
    document.getElementById("cow2").disabled=false;
};

function myFunction2(){
    let firstAnswer  = window.prompt('How many different breeds of cattle are in the world? a. 2, b. 257, c. over 1000?')
        if(firstAnswer === 'a'){
            let secondAnswer = window.alert(`That is not correct. Try again.`);
            wrongAnswer++;
            console.log(wrongAnswer);
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.alert(`That is not correct. Try again.`);
            wrongAnswer++;
            console.log(wrongAnswer);
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.alert(`over 1000 is correct and there are over 1.4 billion cattle in the world.`);
            myScore++;
            console.log(myScore);
        }
        document.getElementById("cow2").disabled=true;
        document.getElementById("cow3").disabled=false;
};

function myFunction3(){
    let firstAnswer  = window.prompt('True or False--Are baby cows called kids?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`This is not true. Kids are actually baby goats.`);
        wrongAnswer++;
        console.log(wrongAnswer);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`Baby cows are actually called calves.`);
        myScore++;
        console.log(myScore);
    }
    document.getElementById("cow3").disabled=true;
    window.alert("number of correct answers " + myScore);
    window.alert("number of wrong answers " + wrongAnswer);
};
