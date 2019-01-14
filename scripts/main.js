//https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

function multiply(num1, num2){
    var result = num1 * num2;
    return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-example.jpg') {
        myImage.setAttribute('src','images/logo-example2.jpg');
    } else {
        myImage.setAttribute('src','images/logo-example.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}