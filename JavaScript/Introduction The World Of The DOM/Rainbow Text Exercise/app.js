const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const span =document.querySelectorAll('span');
for(let i=0;i<span.length;i++){
    span[i].style.color=colors[i];
}