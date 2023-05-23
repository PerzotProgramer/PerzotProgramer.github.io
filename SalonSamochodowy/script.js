function selection(){
    var select = document.getElementById("cars");
    var value = select.value;
    if(value == "all"){
        document.getElementById("bmw").style.opacity = 100;
        document.getElementById("audi").style.opacity = 100;
    }
    else if(value == "bmw"){
        document.getElementById("bmw").style.opacity = 100;
        document.getElementById("audi").style.opacity = 0;
    }
    else if(value == "audi"){
        document.getElementById("audi").style.opacity = 100;
        document.getElementById("bmw").style.opacity = 0;
    }
}