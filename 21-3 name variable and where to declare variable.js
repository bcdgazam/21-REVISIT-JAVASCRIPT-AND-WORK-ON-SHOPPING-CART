//21-3 How to name variable and where to declare variable

//* Convert Feet item to mile 
/*
function footToMile(foot){
    if(foot < 0){
        console.log('You may not entered valid input. Please check!');
    }
    let miles = parseFloat(0.000189394 * foot);
    console.log('Value in Mile : ' + miles.toFixed(6));
}

//! Output Check
footToMile(10)

*/



/*

// Wood Calculator
function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        console.log('Please Enter valid input');
    }
    totalWood = (chair * 1 ) + (table * 3) + (bed * 5);
    console.log('Total wood needed : ' + totalWood + ' ft.');
}

woodCalculator(1, 5, 10);

*/




/*

// Brick Calculator
function brickCalculator(floor){
    let totalBrick;
    if (floor <= 0) {
        console.log('Sorry! Negative input not allowed.');
        return;
    }
    if (floor <= 10) {
        totalBrick = floor * 15 * 1000;
    }
    else if (floor <= 20) {
        totalBrick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
    }
    else{
        totalBrick = (10 * 15 * 100) + (10 * 12 * 100) + ((floor -  20) * 10 * 1000);
    }
    console.log('Total brick need to build the building: ' + totalBrick);
}

brickCalculator(5);

*/


// Find Tiny Friend

function tinyFriend(friends){
    if(friends.length === 0){
        console.log('Please enter a valid list.');
        return
    }
    
    let tiny = friends[0];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length < tiny.length){
            tiny = friends[i];
        }
    }
    console.log('Tiny friends : ', tiny);
}

tinyFriend(['hitler', 'john', 'doe']);
