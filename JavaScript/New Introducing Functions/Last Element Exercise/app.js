// DEFINE YOUR FUNCTION BELOW:
function lastElement (array) {
    if (array.length === 0) {
        return null;
    }
    else {
        return array[array.length - 1];
    }
}
lastElement([1,2,3]);