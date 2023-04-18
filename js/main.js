const mailValide = ["mariorossi@gmail.com", "lucaverdi@gmail.com", "paolobianchigmail.com", "chiarascura@gmail.com"]

let mail = prompt("Inserisci la tua email")

if (mailValide.includes(mail)) {
    console.log("L'email è corretta!")
} else console.log ("Devi prima registrare l'email per poter accedere.")


