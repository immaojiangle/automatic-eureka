var myImage = document.querySelector('img');
myImage.onclick = function(){
  var mysrc = myImage.getAttribute('src');
  if(mysrc==="images/website-drawing-scan.png"){
    myImage.setAttribute('src','images/firefox2.jpg');
  }else{
      myImage.setAttribute('src','images/website-drawing-scan.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Please enter your name.');
    localstorage.setAttribute('name',myName);
    myHeading.textContent = 'Mozilla is coll ,' + myName;
}
if(!localstorage.getAttribute('name')){
    setUserName();
}else{
    myHeading.textContent = "Mozilla is coll, "+ localStorage.getAttribute('name');
}
myButton.onclick = function(){
    setUserName();
}