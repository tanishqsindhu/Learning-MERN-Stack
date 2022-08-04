// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul=document.querySelector('ul');
const product=document.querySelector('#product');
const quatity=document.querySelector("#qty");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newLi =document.createElement('li');
    newLi.innerText=`${quatity.value} ${product.value}`;
    ul.appendChild(newLi);
    quatity.value='';
    product.value='';
})