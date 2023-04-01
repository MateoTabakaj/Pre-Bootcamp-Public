
function popup(element) {
    element.parentElement.remove();
}

function city(element){
    alert("Loading weather report...");
}

var temps = document.querySelectorAll(".current");

function sel(element) {
    if (element.value == "celcius") {
        for (var j = 0; j < temps.length; j++) {
            temps[j].innerText = ((parseInt(temps[j].innerText) - 32) / 1.8).toFixed(0);

            console.log(temps[j].innerText);
        }
    }
    else if (element.value == "fahrenheit") {
        for (var j = 0; j < temps.length; j++) {
            temps[j].innerText = ((parseInt(temps[j].innerText) * 1.8) + 32).toFixed(0);

            console.log(temps[j].innerText);
        }
    }
}