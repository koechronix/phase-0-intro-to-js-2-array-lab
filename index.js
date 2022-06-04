// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
myArray.length;

function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}


function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;

}
console.log(destructivelyPrependCat("cat"));

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}


function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    return [
        name,
        ...cats,
    ]
}
function removeLastCat(name){
    return cats.slice(0 ,2)
}
function removeFirstCat(){
    return cats.slice(1)
}