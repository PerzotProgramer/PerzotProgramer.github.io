samochody = [ 
    // Nieudolny JSON
    {
        "marka": "Audi",
        "model": "Quattro",
        "rokProdukcji": "1980",
        "konieMech": "150KM",
        "przebieg": "210 050km",
        "cena": 500000,
        "img": "res/quattro.png"
    },
    {
        "marka": "BMW",
        "model": "E46",
        "rokProdukcji": "2010",
        "konieMech": "136KM",
        "przebieg": "451 500km",
        "cena": 50000,
        "img": "res/e46.png"
    },
    {
        "marka": "Volkswagen",
        "model": "Golf mk1",
        "rokProdukcji": "1982",
        "konieMech": "90KM",
        "przebieg": "267 800km",
        "cena": 20000,
        "img": "res/golf1.png"
    },
    {
        "marka": "Opel",
        "model": "Astra mk3",
        "rokProdukcji": "2011",
        "konieMech": "110KM",
        "przebieg": "250 500km",
        "cena": 23000,
        "img": "res/astra3.png"
    },
    {
        "marka": "BMW",
        "model": "320i",
        "rokProdukcji": "2006",
        "konieMech": "170KM",
        "przebieg": "120 500km",
        "cena": 25000,
        "img": "res/320i.png"
    },
    {
        "marka": "Porche",
        "model": "911",
        "rokProdukcji": "2023",
        "konieMech": "385KM",
        "przebieg": "10 230km",
        "cena": 611000,
        "img": "res/911.png"
    },
    {
        "marka": "Mercedes",
        "model": "W124",
        "rokProdukcji": "1995",
        "konieMech": "113KM",
        "przebieg": "99 520km",
        "cena": 62000,
        "img": "res/w124.png"
    },
    {
        "marka": "Audi",
        "model": "100 Coupe S",
        "rokProdukcji": "1975",
        "konieMech": "112KM",
        "przebieg": "27 000km",
        "cena": 55000,
        "img": "res/coupe100.png"
    },
    {
        "marka": "Volkswagen",
        "model": "Golf mk4",
        "rokProdukcji": "2002",
        "konieMech": "150KM",
        "przebieg": "303 750km",
        "cena": 10500,
        "img": "res/golf4.png"
    },
    {
        "marka": "Volkswagen",
        "model": "Passat mk6",
        "rokProdukcji": "2008",
        "konieMech": "140KM",
        "przebieg": "289 410km",
        "cena": 20900,
        "img": "res/passat6.png"
    },
    {
        "marka": "Mercedes",
        "model": "S350",
        "rokProdukcji": "2015",
        "konieMech": "258KM",
        "przebieg": "260 000km",
        "cena": 159000,
        "img": "res/s350.png"
    }
]


function Wybor(){
    var select = document.getElementById("cars");
    var value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++) divs[i].style.display = "block";
            break

        case "volkswagen":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("volkswagen")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "opel":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("opel")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "mercedes":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("mercedes")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "audi":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "porche":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("porche")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "bmw":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("bmw")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break
        }
}

function WczytajDane(index){
    sessionStorage.setItem("marka", samochody[index].marka);
    sessionStorage.setItem("model", samochody[index].model);
    sessionStorage.setItem("rokProdukcji", samochody[index].rokProdukcji);
    sessionStorage.setItem("konieMech", samochody[index].konieMech);
    sessionStorage.setItem("przebieg", samochody[index].przebieg);
    sessionStorage.setItem("cena", samochody[index].cena);
    sessionStorage.setItem("img", samochody[index].img);
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
    document.getElementById("cena").innerHTML = "Cena: ".concat(cena).concat(" zł");
    document.getElementById("img").src = img;
}

function Wroc(){location.href = "index.html";}

function Potwierdz(){

    var dane = document.getElementsByName("dane");
    var breaker = true;
    for (var i = 0; i < dane.length; i++){
        if (dane[i].value == null || dane[i].value == "") {
            breaker = false;
        }
    }

    var cenaDodatkow = 0;
    var dodatki = document.getElementsByName("dodatki");
    for(var i = 0; i < dodatki.length; i++){
        if (dodatki[i].checked) cenaDodatkow += parseInt(dodatki[i].value);
    }
    sessionStorage.setItem("cenaDodatkow", cenaDodatkow);
    if (breaker) {
        location.href = "potwierdzenie.html";
    } 
    else {
        alert("Proszę wypełnić dane osobowe!");
    }
}

function Zakup(){
    var marka = sessionStorage.getItem("marka");
    var model = sessionStorage.getItem("model");
    var sumaCen = sessionStorage.getItem("cena");
    var cenaDodatkow = sessionStorage.getItem("cenaDodatkow");
    sumaCen = parseInt(sumaCen) + parseInt(cenaDodatkow)

    var date = new Date();
    var dzien = date.getDate();
    var miesiac = date.getMonth() + 1;
    var rok = date.getFullYear();
    
    dzien += 7 + Math.floor(Math.random() * 7);
    if (dzien >= 31){
        dzien %= 31;
        miesiac += 1;
        if (dzien == 0) dzien += 1;
    }
    
    var wiadomosc = "Dziękujemy za zakup samochodu ".concat(marka).concat(" ").concat(model);
    var czasOczekiwania = "Przewidywany czas odbioru: ".concat(dzien).concat(".").concat(miesiac).concat(".").concat(rok);
    var zaplata = "Finalna cena: ".concat(sumaCen).concat(" zł");
    document.getElementById("wiadomosc").innerHTML = wiadomosc;
    document.getElementById("dostawa").innerHTML = czasOczekiwania;
    document.getElementById("zaplata").innerHTML = zaplata;
}

function FPlatnosci(){
    if(document.getElementById("naRaty").checked){
        document.getElementById("raty").style.display = "initial";
        document.getElementById("ratyLabel").style.display="initial";
    }
    else{
        document.getElementById("raty").style.display = "none";
        document.getElementById("ratyLabel").style.display = "none";
    }
}