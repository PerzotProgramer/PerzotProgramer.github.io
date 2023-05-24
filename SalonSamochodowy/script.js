function selection(){
    var select = document.getElementById("cars");
    var value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
            for (i = 0; i < divs.length; i++) divs[i].style.display = "block";
            break

        case "volkswagen":
            var divs = document.getElementsByClassName("cars");
            for (i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("volkswagen")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "opel":
            var divs = document.getElementsByClassName("cars");
            for (i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("opel")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "mercedes":
            var divs = document.getElementsByClassName("cars");
            for (i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("mercedes")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "audi":
            var divs = document.getElementsByClassName("cars");
            for (i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "porche":
            var divs = document.getElementsByClassName("cars");
            for (i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("porche")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "bmw":
            var divs = document.getElementsByClassName("cars");
            for (i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("bmw")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break
        }
}

function WczytajDane(marka, model, rokProdukcji, konieMech, przebieg, cena, img){
    sessionStorage.setItem("marka", marka);
    sessionStorage.setItem("model", model);
    sessionStorage.setItem("rokProdukcji", rokProdukcji);
    sessionStorage.setItem("konieMech", konieMech);
    sessionStorage.setItem("przebieg", przebieg);
    sessionStorage.setItem("cena", cena);
    sessionStorage.setItem("img", img);
    location.href = "zakup.html";
}

function OdczytajDane(){
    var marka = sessionStorage.getItem("marka");
    var model = sessionStorage.getItem("model");
    var rokProdukcji = sessionStorage.getItem("rokProdukcji");
    var konieMech = sessionStorage.getItem("konieMech");
    var przebieg = sessionStorage.getItem("przebieg");
    var cena = sessionStorage.getItem("cena");
    var img = sessionStorage.getItem("img");
    
    document.getElementById("marka").innerHTML = "Marka: ".concat(marka);
    document.getElementById("model").innerHTML = "Model: ".concat(model);
    document.getElementById("rokProdukcji").innerHTML = "Rok Produkcji: ".concat(rokProdukcji);
    document.getElementById("konieMech").innerHTML = "Moc silnika: ".concat(konieMech);
    document.getElementById("przebieg").innerHTML = "Przebieg: ".concat(przebieg);
    document.getElementById("cena").innerHTML = "Cena: ".concat(cena);
    document.getElementById("img").src = img;
}

function Wroc(){location.href = "index.html";}

function Potwierdz(){
    location.href = "potwierdzenie.html";
}

function Zakup(){
    var marka = sessionStorage.getItem("marka");
    var model = sessionStorage.getItem("model");
    var date = new Date();
    var dzien = date.getDate();
    var miesiac = date.getMonth() + 1;
    var rok = date.getFullYear();
    
    dzien += Math.floor(Math.random() * 21);
    if (dzien >= 31){
        dzien %= 31;
        miesiac += 1;
        if (dzien == 0) dzien += 1;
    }
    
    var wiadomosc = "Dziękujemy za zakup samochodu ".concat(marka).concat(" ").concat(model);
    var czasOczekiwania = "Przewidywany czas odbioru: ".concat(dzien).concat(".").concat(miesiac).concat(".").concat(rok);
    
    document.getElementById("wiadomosc").innerHTML = wiadomosc;
    document.getElementById("dostawa").innerHTML = czasOczekiwania;
}