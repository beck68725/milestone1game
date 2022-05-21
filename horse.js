//score
let myScore = 0
let wrongAnswer = 0

//question 1
function myFunction1(){
let firstAnswer  = window.prompt('Put the steps for saddling a horse in the correct order: 1. put the saddle on the horse. 2. put the bride on the horse. 3. catch the horse. 4. put the saddle pad on the horse. 5. groom the horse. 6. go for a ride.')
    if(firstAnswer === '3, 5, 4, 1, 2, 6'){
        let secondAnswer = window.alert(`Great job!`);
        console.log(myScore + 1);
    } else if(firstAnswer !== '3, 5, 4, 1, 2, 6') {
        let secondAnswer = window.alert(`Let's do a little research, see what we can find and try again.`);
        console.log(wrongAnswer + 1);
        }
}
//question 2
function myFunction2(){
    let firstAnswer  = window.prompt('True or False--Do Horses have 10 different muscles in their ears?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.alert(`You are correct!!`);
        console.log(myScore + 1);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.alert(`This is actually true. The 10 muscles allow the ears to rotate nearly 180 degrees and move independently of one another.`);
        console.log(wrongAnswer + 1);
    }
}
//question 3
function myFunction3(){
    let firstAnswer  = window.prompt('How many degrees can a horse see? a. 300 degrees, b.100 degrees, c. 360 degrees.')
        if(firstAnswer === 'a'){
            let secondAnswer = window.alert(`That is not correct. Try again.`);
            console.log(wrongAnswer + 1);
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.alert(`That is not correct. A person can see 180 degrees. Try again.`);
            console.log(wrongAnswer + 1);
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.alert(`360 degrees is correct. A horse can almost see in a full circle.`);
            console.log(myScore + 1);
        }
}

myScore()
wrongAnswer()