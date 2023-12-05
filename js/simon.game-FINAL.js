// Grab all 4 buttons in the simon-container
// get them into an array of 4 elements (Node list)

const buttons = document.querySelectorAll('.simon-container button');
let isPlaying = false; // a boolean to keep track of whether game is already playing or not

const h2 = document.querySelector('h2');

// array to keep track of buttons clicked: do this by saving btn color
let sequence = []; 
console.log('sequence:', sequence);
let clicks = 0;

// make each button clickable, to start just log the color, which is the id of the button:
buttons.forEach((btn) => btn.addEventListener('click', () => {
    // check if this is the correct btn; does it match with sequence?
    if(btn.id == sequence[clicks]) {
        clicks++;
        //if user has clicked through entire sequence correctly, servew new btn
        h2.textContent = "Good! Keep Going! Clicks: " + clicks;
        if(clicks == sequence.length) serveBtn();
    } else {
        new Audio(`audio/sat-on-the-cat.mp3`).play();
        h2.textContent = 'Game Over! Press any key to play again.';
        // NEW GAME RESET
        sequence = []; // reset the sequence for a new game
        isPlaying = false; // toggle boolean so that 'keydown' starts new game
    }
}));

// Press any key to start game.
// One of the 4 buttons flashed. This is the users cue to click the same button.


// any key is clicked -- flash consists of .5 second delay before random button vanishes
// Then another .5 seconds later, button reappears (opacity -- not display.none)
   

// document listen for key -- any key -- and makes button flash 
// Starting game with a key press, generates a random button but for next random btn, user does not hit key
// all subsequent random buttons happen automatically

// because we only want keydown to happen if game is not playing(false)

document.addEventListener('keydown', () => {
    if(!isPlaying) serveBtn();
        isPlaying = true;
        h2.textContent = "Game on!";

});

function serveBtn() {
    
    let r = Math.floor(Math.random() * buttons.length); // random number from 0-3 which represents the 4 colors.
    const btn = buttons[r]; // set variable btn so we don't type out buttons[r] every time. 
    console.log('random button color:', btn.id); // gives us random color everytime we press a key.
    setTimeout(() => {
        btn.style.opacity = '0'; 
        new Audio(`audio/${btn.id}.mp3`).play();
    }, 200); // .2 second delay then random btn vanishes

    setTimeout(() => btn.style.opacity = '1', 500); // .5 seconds later, the btn reappears
    // save the color of the served button to the sequence arr:
    sequence.push(btn.id); // ['green', 'red', blue'... etc]
    console.log(sequence); // [green];
    clicks = 0; // users turn to try and replicate sequence. so reset clicks
}










