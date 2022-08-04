const btn =document.querySelector('#v2');

btn.onclick=function(){
    console.log("You Clicked Me!!");
    console.log("I HoPE IT WORKED!");
}
function scream(){
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
}
btn.onmouseenter = scream;