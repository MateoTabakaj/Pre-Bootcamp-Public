function liked(button,el){
    if (button.innerHTML =="Like") {
    document.getElementById(el).innerHTML++;
    button.innerText= "Unlike";
    }
    else{
        document.getElementById(el).innerHTML--;
        button.innerHTML = "Like";
    }
}


