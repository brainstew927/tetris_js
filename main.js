
var x = 0;
var y = 0;


var string_stamp = "";

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
for (var i = 0; i < mappa.length; i++) {



    for(var x = 0; x < mappa[i].length; x++) {
        string_stamp = string_stamp + mappa[i][x].toString();

    }
    string_stamp= string_stamp + "\n";
}
console.log(string_stamp);
