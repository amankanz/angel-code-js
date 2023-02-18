//Dispatching on value with switch
switch (prompt("Feeling tired..? Answer by yer or not")) {
  case "yes":
    console.log("Get some rest!");
  case "not":
    console.log("Contunue your practice!");
    break;
  default:
    console.log("Unknown physical state!");
}
