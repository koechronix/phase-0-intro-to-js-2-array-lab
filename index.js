// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

console.log(destructivelyAppendCat("cat"));

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;

}
console.log(destructivelyPrependCat("cat"));

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
console.log(destructivelyPrependCat("cat"))

function destructivelyRemoveFirstCat(){
    cats.pop();
    return cats;
}
console.log(destructivelyAppendCat("cat"))
