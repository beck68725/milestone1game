//score
let myScore = 0;
let wrongAnswer = 0;
document.getElementById("horse2").disabled=true;
document.getElementById("horse3").disabled=true;
//question 1
function myFunction1(){
let firstAnswer  = window.prompt('Put the steps for saddling a horse in the correct order: 1. put the saddle on the horse. 2. put the bride on the horse. 3. catch the horse. 4. put the saddle pad on the horse. 5. groom the horse. 6. go for a ride.')
    if(firstAnswer === '3, 5, 4, 1, 2, 6'){
        let secondAnswer = window.alert(`Great job!`);
        myScore++;
        console.log(myScore);
    } else if(firstAnswer !== '3, 5, 4, 1, 2, 6') {
        let secondAnswer = window.alert(`Let's do a little research, see what we can find and try again.`);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        document.getElementById("horse1").disabled=true;
        document.getElementById("horse2").disabled=false;
};
//question 2
function myFunction2(){
    let firstAnswer  = window.prompt('True or False--Do Horses have 10 different muscles in their ears?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`You are correct!!`);
        myScore++;
        console.log(myScore);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`This is actually true. The 10 muscles allow the ears to rotate nearly 180 degrees and move independently of one another.`);
        wrongAnswer++;
        console.log(wrongAnswer);
    }
        document.getElementById("horse2").disabled=true;
        document.getElementById("horse3").disabled=false;
};
//question 3
function myFunction3(){
    let firstAnswer  = window.prompt('How many degrees can a horse see? a. 300 degrees, b.100 degrees, c. 360 degrees.')
        if(firstAnswer === 'a'){
            let secondAnswer = window.alert(`That is not correct. Try again.`);
            wrongAnswer++;
        console.log(wrongAnswer);
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.alert(`That is not correct. A person can see 180 degrees. Try again.`);
            wrongAnswer++;
        console.log(wrongAnswer);
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.alert(`360 degrees is correct. A horse can almost see in a full circle.`);
            myScore++;
            console.log(myScore);
        }
        document.getElementById("horse3").disabled=true;
        window.alert("number of correct answers " + myScore);
        window.alert("number of wrong answers " + wrongAnswer);
};
