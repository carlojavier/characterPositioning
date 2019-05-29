// define string
var zerobasedString = "Lighthouse in the house";
// define function
function characterPositioning(zero) {
  // define empty object, kill spaces
  console.log(zero.length);
  var myObject = {};
  var noSpaces = zero.split(" ").join("");
  console.log(noSpaces.length);
  for (var i = 0; i < noSpaces.length; i++) {
    // identify zero-based positions
    if (myObject[noSpaces[i]]) {
      myObject[noSpaces[i]].push(i)
      } else {
      myObject[noSpaces[i]] = [i];
    }
  }
  return myObject
}

console.log(characterPositioning(zerobasedString));
