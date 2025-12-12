console.log(  "functions running" );

//1. funvtion declaration (creating the fn)
function sayHello() {
    //the body of the function
    console.log("Hello Cohort 64");
}
//2. function call/ run/ trigger/ execute the fn( code, console, user)
sayHello();
sayHello();
sayHello();


// Example 2 with 1 parameter
function greetBird(birdName) {
    document.write( `<p> Hello <b> ${birdName} </b>! ready to destroy some pigs </p>` );
}

greetBird("Red");
greetBird("Chuck");
greetBird("Bomb");
   
function greetPlayer(firstName, lastName) {
    document.write( `<p> Welcome ${firstName} ${lastName} to the game! </p>` );

}

greetPlayer( "Dayleon", "Bell");
greetPlayer( "Dontae", "Davis");

function doubleScore(score){
    let total= score * 2;
    document.write( `<p> Your new score is: ${total} </p>` );


}

doubleScore(40);

// Eample4 with propmpt()
function askPigName(){
    let pigName = prompt("Enter the pig name:");
    console.log( `target: ${pigName}` );
}

//askPigName();

// op1. call the fn on the code
//askPigName();
//op2. use the console to trigger the fn
//op3. the user on the HMTL.

// Example 5 with defult parameters
function add(num1=0, num2=0){
    let total = num1 + num2;
    console.log('The total is: ${total}');
}

    add();
    add(10, 20);
    add(5,16);

    function combineNames(firstName, lastName){
        let combineNames = firstName + lastName
        console.log(`Full name is: ${combineNames}`);
    }
    combineNames("Dayleon", "Bell");
    combineNames("Dayleon");
    combineNames();

    function convertToSeconds(minutes){
        let seconds = minutes * 60;
        console.log(` ${minutes} minutes are ${seconds} seconds`);
    }

    convertToSeconds(3);
    convertToSeconds(20);
    convertToSeconds(15);

    function convertToSeconds(){
        let minutes = prompt("Enter the minutes");
     let seconds = minutes * 60;
     document.getElementById("results").innerHTML = `<p> ${minutes} minutes are ${seconds} seconds</p>`;
    }