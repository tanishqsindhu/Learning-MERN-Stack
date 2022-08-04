const p1Button=document.querySelector('#p1button');
const p2Button =document.querySelector('#p2button');
let p1Score=0,p2Score=0;
const p1Display =document.querySelector('#p1Display')
const p2Display =document.querySelector('#p2Display')
let winningScore=5;
let isGameOver= false;
p1Button.addEventListener('click',()=>{
    if(!isGameOver){
        p1Score++;
        if(p1Score===winningScore){
            isGameOver=true;
        }
        p1Display.textContent=p1Score;
    }

})
p2Button.addEventListener('click',()=>{
    if(!isGameOver){
        p2Score++;
        if(p2Score===winningScore){
            isGameOver=true;
        }
        p2Display.textContent=p2Score;
    }
})
