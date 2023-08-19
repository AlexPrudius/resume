var title = document.getElementById('myTitle');
var button = document.getElementById('myButton');
var myLogo = document.getElementById('myLogo');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');

button.onclick = function(){
    modal.style.display = "block";
};

close.onclick = function(){
    modal.style.display = "none";
};

myLogo.onmouseenter = function(){
    myLogo.style.fontSize = '60px';
};

myLogo.onmouseleave = function(){
    myLogo.style.fontSize = '';
};
