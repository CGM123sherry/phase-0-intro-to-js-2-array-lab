// Write your solution here!
/*const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
   }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat(name){
    return [...cats, name];

}
function prependCat(name){
    return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  
//function calls
destructivelyAppendCat("Ralph");
//resetting an array
cats.length = 0;
cats.push(Milo, Otis, Garfield);

destructivelyPrependCat("Bob");
cats.length = 0;
cats.push(Milo, Otis, Garfield);

destructivelyRemoveLastCat();
cats.length = 0;
cats.push(Milo, Otis, Garfield);

appendCat("Broom");
prependCat("Arnold");
removeLastCat();
removeFirstCat();*/


// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  cats.push(name);
  return cats;
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
  return cats;
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
  return cats;
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
  return cats;
};

const appendCat = (name) => {
  return [...cats, name];
};

const prependCat = (name) => {
  return [name, ...cats];
};
const removeLastCat = () => {
  return cats.slice(0, -1);
};
const removeFirstCat = () => {
  return cats.slice(1);
};

destructivelyAppendCat("Ralph");

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyPrependCat("Bob");

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyRemoveLastCat();

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyRemoveFirstCat();

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

appendCat("Broom");
prependCat("Arnold");
removeLastCat();
removeFirstCat();