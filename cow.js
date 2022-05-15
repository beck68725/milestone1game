function myFunction1(){
    let firstAnswer  = window.prompt('True or False--Do cows drink almost a bathtub of water a day?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.prompt(`You are correct!!`)
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.prompt(`This is actually true. Cows drink 100 liters of water a day, which is almost the same as a bathtub full of water.`)
    }
}

function myFunction2(){
    let firstAnswer  = window.prompt('How many different breeds of cattle are in the world? a. 2, b. 257, c. over 1000?')
        if(firstAnswer === 'a'){
            let secondAnswer = window.prompt(`That is not correct. Try again.`)
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.prompt(`That is not correct. Try again.`)
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.prompt(`over 1000 is correct and there are over 1.4 billion cattle in the world.`)
        }
}

function myFunction3(){
    let firstAnswer  = window.prompt('True or False--Are baby cows called kids?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.prompt(`This is not true. Kids are actually baby goats.`)
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.prompt(`Baby cows are actually called calves.`)
    }
}