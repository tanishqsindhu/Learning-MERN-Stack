// DEFINE YOUR FUNCTION BELOW:
function capitalize(word){
    let firstCharacter =word.slice(0,1).toUpperCase();
    let restWord=word.slice(1,word.length);
    return firstCharacter.concat(restWord);
}
capitalize('eggplant');