// WRITE YOUR CODE IN HERE:
for(let i=0;i<100;i++){
    const newButton =document.createElement('button');
    newButton.innerText='Hey!';
    const div=document.querySelector('div');
    div.appendChild(newButton);
}