if(1+2===3){
    console.log("condition is true");
}
const age=5;
// 0-5 free 
// 5-10 $10
// 10-65 $20
// 65+ $10
if(age<=5){
    console.log("Your r a baby, Free");
}else if(age<=10){
    console.log("Your r a child, $10");
}else if(age<=65){
    console.log("Your r a adult, $20");
}else{
    console.log("Your r a senior, $10");
}

const day='Mon';

if(day==='Fri'){
    console.log("Decent after work hours");
}else if(day==='Sat'){
    console.log("great");
}else if(day==='Sun'){
    console.log("good");
}else{
    console.log("Meh");
}

const password=prompt('Enter password more than 6');
if(password>=6){
    console.log("password is long enough");
    if(password.indexOf(' ')===-1){
        console.log('doesnot have space');
    }else{
        console.log('remove Spaces');
    }
}else{
    console.log('password is not long enough');
}
