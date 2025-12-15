console.log("conditionals running");

let result = 70;

if(result> 60){
    console.log("You passed the exam");
}

let result2= 50
if(result == result2){
    console.log("the values are the same");

}

// -------------------
// = for assign a value
// == for compare
// case 1: 5 == 5 
// case 2: 5 == "5" -> compares the value
// case 3: 5 === "5" -> compares datatype and value

results = 20;
if( result> 40){
    console.log("you passed exam")
} else{
    console.error("you did not passs exam");
}

let waterTemp= 105;
if (waterTemp>= 100){
    console.log("the water is boiling");
}else{
    console.log(" The water is not boiling")

}

// else-if statement 
//Syntax
// if (condition1){
// code to be run if the condition1 is TRUE
//}else if(condition2){
// code to be run if the condition2 is TRUE  
//}else{
// code to be executed if conditions are FALSE
//}

function ageCalculator(){
    if (age < 13){
        console.log("You are a child");
    }else if(age<21){
        console.log("You are a teenager");
    }else if( age < 64){
        console.log("you are an adult");
}else{
    console.log("You are a senior")}
}


    

function traffic(){
    let light = prompt("Enter a color:");

    if(light.toLowerCase() == "green"){ 
        console.log("Go!");
    }else if(light.toLowerCase() == "yellow"){
        console.log("Slow Down!");
    }else if(light.toLowerCase() == "red"){
        console.log("Stop!");
    }else{
        console.error("Unknown light color. Please proceed with caution.");
    }
}
 
let userType = "Admin";

if(userType =="Admin"){
    console.log("Full Access")
    document.write("Welcome Admin User")
}else if (userType == "editor"){
    console.log("Access but limited actions");
    document.write("Welcome Editor")
}else{
    console.log("You do not have access");
    document.write("Error")
}
// switch-case

let paymentMethod= "US bank";

switch(paymentMethod){
    case "cash":
        console.log("You paid with cash");
        break;
    case "Bitcoin":
    console.log("You paid with Bitcoin");
    break;
    case "Card":
        console.log("You paid with Creadit Card");
        break;
    case "Paypal":
        console.log("You paid with Paypal");
        break;
    case "wise":
            console.log("Yuo paid with Wise");
            break;
    default:
        console.log("We cannot process the payment method");
            
    
    
}

function weatherOutfit(){
    console.log("weather outfit fn");
    const DIV = document.getElementById("results");
    let temp = prompt ("enter the weather");


    DIV.innerHTML="";
    DIV.classList.remove("hot,cold");

    if(temp< 15){
        DIV.innerHTML="Jacket";
        DIV.classList.add("cold");
    }else if(temp<25){
        DIV.innerHTML="sweater";
    }else{
        DIV.innerHTML="T-shirt";
        DIV.classList.add("hot")
    }
}