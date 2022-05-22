//score
let myScore = 0;
let wrongAnswer = 0;
document.getElementById("chicken2").disabled=true;
document.getElementById("chicken3").disabled=true;
function myFunction1(){
    let firstAnswer  = window.prompt('True or False--Do chickens recognize their keeper?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`You are correct! It has been claimed that a chicken may even know it's name.`);
        myScore++;
        console.log(myScore);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`This is actually true. Chickens have great eye sight. They can recognize their keeper and also distingish between members of their flock.`);
        wrongAnswer++;
        console.log(wrongAnswer);
    }
    document.getElementById("chicken1").disabled=true;
    document.getElementById("chicken2").disabled=false;
};

function myFunction2(){
    let firstAnswer  = window.prompt('Can chickens see color? a.only blue-green colors, b.all colors, c. red-yellow colors only')
        if(firstAnswer === 'a'){
            let secondAnswer = window.alert(`That is not correct. Try again.`);
            wrongAnswer++;
            console.log(wrongAnswer);
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.alert(`b is correct. Chickens can see all colors. They can also see ultraviolet light and iridescent hues.`);
            myScore++;
            console.log(myScore);
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.alert(`That is not correct. Try again.`)
            wrongAnswer++;
            console.log(wrongAnswer);
        }
        document.getElementById("chicken2").disabled=true;
        document.getElementById("chicken3").disabled=false;
};

function myFunction3(){
    let firstAnswer  = window.prompt('True or False--Do hens talk to their chicks while they are in the egg?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`This is true. Just like people hens talk to their babies before they are born.`);
        myScore++;
        console.log(myScore);
       
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`This is actually true.`);
        wrongAnswer++;
        console.log(wrongAnswer);
    }
    document.getElementById("chicken3").disabled=true;
    window.alert("number of correct answers " + myScore);
    window.alert("number of wrong answers " + wrongAnswer);
};


