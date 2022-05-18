function myFunction1(){
    let firstAnswer  = window.prompt('True or False--Do chickens recognize their keeper?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.prompt(`You are correct! It has been claimed that a chicken may even know it's name.`)
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.prompt(`This is actually true. Chickens have great eye sight. They can recognize their keeper and also distingish between members of their flock.`)
    }
}

function myFunction2(){
    let firstAnswer  = window.prompt('Can chickens see color? a.only blue-green colors, b.all colors, c. red-yellow colors only')
        if(firstAnswer === 'a'){
            let secondAnswer = window.prompt(`That is not correct. Try again.`)
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.prompt(`b is correct. Chickens can see all colors. They can also see ultraviolet light and iridescent hues.`)
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.prompt(`That is not correct. Try again.`)
        }
}

function myFunction3(){
    let firstAnswer  = window.prompt('True or False--Do hens talk to their chicks while they are in the egg?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.prompt(`This is true. Just like people hens talk to their babies before they are born.`)
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.prompt(`This is actually true.`)
    }
}