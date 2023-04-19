let listaMailAutorizzate = ["mariorossi@gmail.com", "lucaverdi@gmail.com", "paolobianchigmail.com", "chiarascura@gmail.com"];
let accessoConsentito;
let mailUtente;
const msgOkElem = document.getElementById("messaggioOK");
const msgKoElem = document.getElementById("messaggioKO");
const btn = document.getElementById("loginButton");


btn.addEventListener("click", function() {
    accessoConsentito = false;
    console.log("Lista email autorizzate", listaMailAutorizzate);
    mailUtente = document.getElementById("emailUtente").value;
    console.log("Email inserita: ", mailUtente);
   
    for (let c = 0; c < listaMailAutorizzate.length; c++) {
        const mailDaConfrontare = listaMailAutorizzate[c];
    
        if(mailUtente == mailDaConfrontare) {
            accessoConsentito = true;
        } 
    }

    console.log("Valore variabile di controllo: ", accessoConsentito);

    if(accessoConsentito == true) {
        console.log("Benvenuto utente autorizzato!");
        msgOkElem.classList.remove("hidden");
        msgKoElem.classList.add("hidden");

    } else {
        console.log("Impossibile effetturare l'accesso, è necessario prima effetturare la registrazione.");
        msgOkElem.classList.add("hidden");
        msgKoElem.classList.remove("hidden");
    }
    
})














