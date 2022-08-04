const btn =document.querySelector('#v2');

btn.onclick=function(){
    console.log("You Clicked Me!!");
    console.log("I HoPE IT WORKED!");
}
function scream(){
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
}
const btn3=document.querySelector('#v3')
btn3.addEventListener('click',function(){
    alert("CLICKED!")
})
function twist(){
    console.log("twist");
}
function Shout(){
    console.log("Shout!")
}
const tasButton =document.querySelector('#tas');
tasButton.addEventListener('click', twist, {once:true})
tasButton.addEventListener('click', Shout)

btn.onmouseenter = scream;