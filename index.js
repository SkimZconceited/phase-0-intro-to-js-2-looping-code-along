function writeCards(x, y) {
    let z = []; //this has to be here so it can be manipulated in the block scope
    for (let i = 0; i < x.length; i++) {
        z.push(`Thank you, ${x[i]}, for the wonderful ${y} gift!`)
        console.log(`Thank you, ${x[i]}, for the wonderful ${y} gift!`,);
        debugger;
    }
    return z;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(x) {
    for (let i = x+1; i > 0; i--) { //this line adds a one to the i so as it can be larger then x so the loop can print everything
        console.log(x--); //this is for displaying 
    }
}

countDown(10);