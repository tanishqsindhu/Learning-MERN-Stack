//Arrow Function Implicit Returns
const rollDie = ()=>(
    Math.floor(Math.random()*6)+1
)
const add=(a,b)=>(
    a+b
)
const add3 =(a,b,c)=>a+b+c
//only one value must be present for implicit Functions

//The filter Method
const numbers=[1,2,3,4,5,6,7,8,9,10]
const odd=numbers.filter(n=>{return n%2==1})