var logineited = localStorage.getItem('logineited');
const button = document.querySelector("#button");
const input = document.querySelector("#login");
const content = document.querySelector(".content");
const login = document.querySelector(".login");
const trues = document.querySelector(".true");
const randomButton = document.getElementById("randomize");
const randomField = document.querySelector("#random");

function Vasos() {
    if (logineited == null) {

        // localStorage.clear();
    }
    else {
        // localStorage.clear();
        login.style.display = "none";
        content.style.display = "flex";
        trues.style.display = "none";
    };


};
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
randomButton.addEventListener('click', function (ev) {
    console.log(randomInteger(1, 3)) ;
}
alert( randomInteger(1, 3) );
function checkAuth() {

    if (input.value.toLowerCase().match(/оле|ol|оле|оле|оле/)) {
        login.style.display = "none";
        content.style.display = "flex";
        trues.style.display = "none";

        localStorage.setItem('logineited', 'ok');
    } else {
        trues.style.display = "flex";
    }
}
button.addEventListener('click', function () {
    checkAuth();
});
function getFri(now) {
    var d = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    d.setDate(d.getDate() + [-2, -3, -4, -5, -6, 0, -1][d.getDay()]);
    if(now.getDate() == d.getDate()){
        d = new Date(now.getFullYear(), now.getMonth() + 2, 0);
        d.setDate(d.getDate() + [-2, -3, -4, -5, -6, 0, -1][d.getDay()]);

    }
    let diff = (d.getTime()-now.getTime())/1000;

    let days = Math.floor(diff/(60*60*24));
    diff%=60*60*24;
    let hours = Math.floor(diff/(60*60));
    diff%=60*60;
    let min = Math.floor(diff/60);

    diff%=60;
    diff = Math.floor(diff);
    return `<div>${days} ${trueRussianDecline("днів","день","дня",days)}</div>  <div>${hours} ${trueRussianDecline("годин","година","години",hours)}</div>  <div>${min} ${trueRussianDecline("хвилин","хвилина","хвилини",min)}</div> <div>${diff} ${trueRussianDecline("секунд","секунда","секунди",diff)}</div>`;
}
function trueRussianDecline(d1, d2, d3, c){
    let res = "";
    switch (c%100){
        case 11: case 12: case 13: case 14:return d1;
        default:
            switch (c%10){
                case 0:case 5:case 6:case 7:case 8:case 9:return d1;
                case 1: return d2;
                case 2:case 3:case 4: return d3;
            }
    }
    return "";
}

(function(){
    document.querySelector("#clock").innerHTML = `${getFri(new Date())}`;
    setTimeout(arguments.callee,1000);
})()
Vasos();


/////to do///
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
        alert("Введите ваше дело!");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}