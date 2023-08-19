var title = document.getElementById('myTitle');
var button = document.getElementById('myButton');
var myLogo = document.getElementById('myLogo');


button.onclick = function(){
    title.style.color= 'red';
};

title.onclick = function(){
    title.style.color= 'black';
};

myLogo.onmouseenter = function(){
    myLogo.style.fontSize = '60px';
};

myLogo.onmouseleave = function(){
    myLogo.style.fontSize = '';
};