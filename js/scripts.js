let nome="nome";
let cognome="surneme";
let colore="color";
const numero="21";
let password="variabile"


nome=prompt("Scrivi il tuo nome: ");
console.log(typeof nome);
alert("Hai scritto come nome " + nome );

cognome=prompt("Scrivi il tuo cognome:");
console.log(typeof cognome);
alert("Hai scritto come cognome " + cognome );


colore=prompt("Qual'è il tuo colore preferito ? ")
console.log(typeof colore);
alert("Hai scritto come colore " + colore );


pVariabile=(` ${nome}`+`${cognome}`+`${colore}`+`${numero}`);

console.log(typeof pVariabile);

console.log("La tua password è" + pVariabile)

alert("La tua psword è  " + pVariabile );