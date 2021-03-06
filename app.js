//create random hex color code
function getColor(){
  var hexcode = "";
  hexcode = "#" + Math.random().toString(16).toUpperCase().slice(2,8);
  return hexcode;
}

//store getColor so it can be called everytime setBackground
//is called
function setBackground(){
  var bgColor = getColor();
  document.body.style.background = bgColor;
}

//get hexcode and return value to div 
function returnHex(){
  document.getElementById("hex").innerHTML = getColor();
}

//when space is pressed, call setBackground & returnHex
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    setBackground();
    returnHex();
  }
}

//add event listener? comment out above code
document.addEventListener("onkeyup", setBackground);