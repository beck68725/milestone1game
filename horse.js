function myFunction1(){
let firstAnswer  = window.prompt('Do you know the correct way to saddle a horse?')
    if(firstAnswer === 'yes'){
        let secondAnswer = window.prompt(`Let's test your knowledge. Do you begin with: a. throwing the saddle on. b.Catching the horse. c.Drawing a picture of your horse with a saddle.`)
        if (secondAnswer === 'a') {
            let secondAnswer = window.prompt('Your horse just giggled at you from accross the pasture and ran away. Try Again.')
        } else if (secondAnswer === 'b') {
                let thirdAnswer = window.prompt('You are correct. First you catch your horse. What comes next : 1. groom him. 2.take him for a test drive. 3.go watch cartoons because Mom will get him ready for me?')
                if (thirdAnswer === '1') {
                    let thirdAnswer = window.prompt('You are correct. You need to brush him and clean his feet. Great job!')
                } else if(thirdAnswer === '2') {
                    let thirdAnswer = window.prompt('OOPS! He had a sandburr under his saddle pad. Better Try Again.')
                } else if(thirdAnswer === '3') {
                    let thirdAnswer = window.prompt('Your Mom is awesome, but she would appreciate some help. Better Try Again.')
                }
        } else if (secondAnswer === 'c') {
            let secondAnswer = window.alert('After taking your picture to art class, how about you go catch your horse?')
        }
    } else if(firstAnswer === 'no') {
        let secondAnswer = window.prompt(`Let's do a little research, see what we can find and try again.`)
        }
}

function myFunction2(){
    let firstAnswer  = window.prompt('True or False--Do Horses have 10 different muscles in their ears?')
    if(firstAnswer === 'true'){
        let secondAnswer = window.prompt(`You are correct!!`)
    } else if(firstAnswer === 'false') {
        let secondAnswer = window.prompt(`This is actually true. The 10 muscles allow the ears to rotate nearly 180 degrees and move independently of one another.`)
    }
}

function myFunction3(){
    let firstAnswer  = window.prompt('How many degrees can a horse see? a. 300 degrees, b.100 degrees, c. 360 degrees.')
        if(firstAnswer === 'a'){
            let secondAnswer = window.prompt(`That is not correct. Try again.`)
        } else if(firstAnswer === 'b') {
            let secondAnswer = window.prompt(`That is not correct. A person can see 180 degrees. Try again.`)
        } else if(firstAnswer === 'c') {
            let secondAnswer = window.prompt(`360 degrees is correct. A horse can almost see in a full circle.`)
        }
}
    