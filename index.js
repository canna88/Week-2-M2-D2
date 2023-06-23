/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
    // Number: è un tipo di variabile che contiene un numero, che può essere float o int
    // String: contiene una serie di caratterti che, nella fase di definizione, devono essere contenuti nelle virgolette ""
    // Boolean: è una variabile di tipo logico, può contenere 2 valori: True o False
    // Undefined: è una variabile il cui contenuto non è ancora stato definito
    // Null: è una variabile che contiene il valore null, un valore vuoto

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

// Un oggetto si può considerare un elemento composto da 1 o più coppie di chiave-valore; il valore può essere un dato di qualsiasi tipo, compreso un altro oggetto. 
// Si definisce utilizzando le {}. In altri linguaggi di programmazione, è definito come un dictionary

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let myVar = 12 + 20
console.log("Domanda 2: ",myVar)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log("Domanda 3: ",x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Alessio"
console.log("Domanda 4: ",name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("Domanda 5: ",4-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
console.log("Domanda 7 - 1° verifica: ",name1 !== name2)
console.log("Domanda 7 - 2° verifica: ",name1 == name2.toLowerCase(), "-> il valore della variabile name2 non è cambiato: ", name2)


//Domanda 6 (NON PRESENTE NEL FILE, MA PRESENTE NELLE SLIDE)
let studentMe = {
    name: "Alessio",
    surname : "Canna",
    hobby : "coding",
}

console.log("Domanda 6: ",studentMe)
