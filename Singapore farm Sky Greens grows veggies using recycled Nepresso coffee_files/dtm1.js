if (typeof _satellite != "undefined") {
  console.log ("1.DTM Implementation: Passed ")
}
else {
  console.log ("1.DTM Implementation: Failed ")
}
if (typeof mcDataLayer != 'undefined') {

  for(var key in mcDataLayer) {
    var value = mcDataLayer[key];
    console.log("--mcDataLayer--" + key + ":" + value);
  }

  console.log ("2.Data Layer: Passed ")
} else {
  console.log ("2.Data Layer: Failed ")
}
if (typeof _satellite != "undefined") { _satellite.pageBottom(); }