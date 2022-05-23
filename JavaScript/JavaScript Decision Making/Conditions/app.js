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