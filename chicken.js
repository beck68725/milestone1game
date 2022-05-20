//score
let myScore = 0
let wrongAnswer = 0

function myFunction1(){
    let firstAnswer  = window.prompt('True or False--Do chickens recognize their keeper?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.prompt(`You are correct! It has been claimed that a chicken may even know it's name.`);
        console.log(myScore + 1);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.prompt(`This is actually true. Chickens have great eye sight. They can recognize their keeper and also distingish between members of their flock.`);
        console.log(wrongAnswer = 1);
    }
}

function myFunction2(){
    let firstAnswer  = window.prompt('Can chickens see color? a.only blue-green colors, b.all colors, c. red-yellow colors only')
        if(firstAnswer === 'a'){
            let secondAnswer = window.prompt(`That is not correct. Try again.`);
            console.log(wrongAnswer = 1);
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.prompt(`b is correct. Chickens can see all colors. They can also see ultraviolet light and iridescent hues.`);
            console.log(myScore + 1);
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.prompt(`That is not correct. Try again.`)
            console.log(wrongAnswer = 1);
        }
}

function myFunction3(){
    let firstAnswer  = window.prompt('True or False--Do hens talk to their chicks while they are in the egg?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.prompt(`This is true. Just like people hens talk to their babies before they are born.`);
        console.log(myScore + 1);
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.prompt(`This is actually true.`);
        console.log(wrongAnswer = 1);
    }
}

