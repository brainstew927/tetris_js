
var x = 0;
var y = 0;

var mappa = [
  [1,1,1],
  [0,0,0],
  [0,0,0]
];

function su(variabile){

      return variabile - 1;

}
function giu(variabile) {
  return variabile + 1;
}

function des(variabile){
  return variabile +1;
}
function sin(variabile){
  return variabile -1;
}
/*

for(var i = 0; i < 10; i++){
  x = giu(x);
  console.log(x);
}
console.log("_________________________-");

for(var i = 0; i < 10; i++){
  x = su(x);
  console.log(x);
}
*/
for (var i = 0; i < mappa[0].length; i++) {
    console.log(mappa[0][i]);
    console.log("sep ");
}

//console.log(mappa[0].length);
