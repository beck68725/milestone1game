function myFunction(){
let firstAnswer  = window.prompt('Do you know the correct way to saddle a horse?')
if(firstAnswer === 'yes'){
    let secondAnswer = window.prompt(`Let's test your knowledge. Do you begin with: a. throwing the saddle on. b.Catching the horse. c.Drawing a picture of your horse with a saddle.`)
    if (secondAnswer === 'a') {
        let secondAnswer = window.prompt('Your horse just giggled at you from accross the pasture and ran away. Try Again.')
    } else if(secondAnswer === 'b') {
            let secondAnswer = window.prompt('You are correct. First you catch your horse. What comes next : a. groom him. b.take him for a test drive. c.go watch cartoons because Mom will get him ready for me?')
    } else if (secondAnswer === 'c') {
            let secondAnswer = window.alert('After taking your picture to art class, how about you go catch your horse?')
    }
}   
    
    

else if(firstAnswer === 'no') {
    let secondAnswer = window.prompt(`Let's do a little research, see what we can find and try again. When you are ready type ok.`)
    if (secondAnswer === 'ok') {
        let secondAnswer = window.prompt('make a loop here')
    }
}
}