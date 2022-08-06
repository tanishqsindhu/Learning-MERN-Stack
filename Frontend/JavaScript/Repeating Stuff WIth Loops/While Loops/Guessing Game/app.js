let maximum=parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number!"));
}
const targetNum =Math.floor(Math.random()* maximum)+1;
let guess =parseInt(prompt("Enter your first guess!"))
let counter=0;
while(parseInt(guess) !==targetNum){
    if(guess==='q')break;
    counter++;
    if(guess>targetNum){
        guess=prompt("Too high! Enter a new guess:");
    }else{
        guess=prompt("Too low! Enter a new guess:");
    }
}
if(guess==='q'){
    console.log('OK, YOU QUIT!')
}else{
console.log('you got it')
console.log(`you got it! It took you ${counter} guesses`)
}