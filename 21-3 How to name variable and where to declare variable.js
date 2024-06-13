//21-3 How to name variable and where to declare variable

//* Convert Feet item to mile 

function footToMile(foot){
    if(foot < 0){
        console.log('You may not entered valid input. Please check!');
    }
    let miles = parseFloat(0.000189394 * foot);
    console.log('Value in Mile : ' + miles.toFixed(6));
}

//! Output Check
footToMile(10)