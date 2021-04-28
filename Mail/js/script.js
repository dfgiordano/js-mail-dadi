/* 1 - Mail
Chiedi all'utente la sua email, */
var mail;

var mail = prompt("Inserisci la tua email");
console.log(mail);

/* controlla che sia nella lista di chi può accedere */
var emailRegistrate = ["alberto@gmail.com", "davide@libero.it", "francesco@outlook.com", "gaia@yahoo.com"] ;
console.log(emailRegistrate);

// var check = emailRegistrate.indexOf(mail);
// console.log(check);
for ( var i = 0; i < emailRegistrate.length; i++) {    
    if (i === emailRegistrate) {
        document.getElementById("ricerca").innerHTML = "Complimenti la tua email si trova tra quelle gi&agrave; registrate &excl;";
        console.log(emailRegistrate[i]);
    }
    else (i != emailRegistrate) {
        (document.getElementById("ricerca").innerHTML = "Spiacenti la tua email non si trova tra quelle gi&agrave; registrate &excl;") ;
    }  
}

