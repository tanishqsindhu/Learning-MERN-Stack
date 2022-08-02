//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container=document.querySelector('#container');
const baseURL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i=1;i<=150;i++){
    const pokemon=document.createElement('div');
    const label =document.createElement('span');
    label.innerText=`#${i}`;
    const newImg =document.createElement('img');
    newImg.src=`${baseURL}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}