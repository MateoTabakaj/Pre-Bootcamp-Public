console.log("page loaded...");

function edit(el) {
    document.querySelector("#name").innerHTML = "Steff Dawidson"
}
var num= 1;
function accept(element,elId) {
    document.querySelector("#remove").innerHTML--;
    element = document.getElementById(elId);
    element.remove();
    document.querySelector("#add").innerHTML++;
    if (Number(document.querySelector("#remove").innerHTML) ==0) {
    document.querySelector("#request").remove();
}   
}


function deny(element,elId) {
    document.querySelector("#remove").innerHTML--;
    element = document.getElementById(elId);
    element.remove();
    if (Number(document.querySelector("#remove").innerHTML) ==0) {
    document.querySelector("#request").remove();
}
}

