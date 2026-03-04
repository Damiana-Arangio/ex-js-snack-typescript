/*  
  🏆 Snack 1
  Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia.
  Controlla il tipo del dato e stampa il valore in modo corretto.
  - Se è una stringa: stampala in maiuscolo
  - Se è un numero: moltiplicalo per due e stampalo
  - Se è un booleano: stampa “Sì” o “No” in base al suo valore
  - In tutti gli altri casi: stampa “Tipo non supportato” 
*/
let data: unknown;

switch (typeof data) {

  case "string":
    console.log(data.toUpperCase());
    break;
  
  case "number":
    console.log(data * 2);
    break;

  case "boolean":
    console.log(data ? "Si" : "No");
    break;
  
  default:
    console.log("Tipo non supportato");
}

/*
🏆 Snack 2
  Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
  - nome → stringa
  - cognome → stringa
  - annoNascita → numero
  - sesso → Può essere solo "m" o "f".
  - anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
*/

type Dipendente = 
{ 
    nome: string, 
    cognome: string, 
    annoNascita: number, 
    sesso: "m" | "f", 
    anniDiServizio: number[]
}
