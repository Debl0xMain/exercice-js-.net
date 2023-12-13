                /* Exercie 1 */
/*
//je cible ma div
const root = document.getElementById('root');
//ma chaine de caractere 
var dialogue = window.prompt();

//j'ecrit dans mon html
root.innerHTML = dialogue;
*/

                /* Exercice 2 */
/*
let a = 5;
let b = 6;
let resultat = a + b;
window.alert(resultat);
*/

                /* Exercice 3 */
/*
let note_maths = 11;
let note_francais = 9;
let note_hg = 16;
let resultat = (note_francais + note_maths + note_hg) / 3

alert('La moyenne est de ' + resultat);
*/

                    /* Exercice 4 */
/*
var budget = 200;
var achat = 280;

if(budget >= achat){
    var payement = "Nous pouvons effectue l'achat";
}
else {
    var payement = "Nous ne pouvons pas effectue l'achat";
}
window.alert(payement)
*/
                    /* Exercice 5 */
/*
const root = document.getElementById('root');
var prix_ht = parseFloat(window.prompt());
var prix_tva = (prix_ht * 20 )/100;
var prix_ttc = prix_ht + prix_tva;
root.innerHTML = prix_ttc;
*/
                    /* Exercice 6*/
/*
const root = document.getElementById('root');
var x = 0;

do {
    x++;
    root.innerHTML += x + "<br>";
}while(x < 100)
*/
                /* Exercice 7*/
/*
var age = window.prompt();
    if (age < 18){
        window.alert("Merci d'allez sur jeux.fr")
        }
        else if (age => 18){
            window.alert("Tu est majeur")
        }
*/

        /* Exercice 8 */
        /*
var departement = '77';
var x = 0
while(x < 999){

    if(x < 10){
        root.innerHTML += departement + "00" + x + "<br>";
    }
    if(x > 10 && x < 100){
        root.innerHTML += departement + "0" + x + "<br>";
    }
    else if (x > 100){
        root.innerHTML += departement + x + "<br>";
    }
    x++;
}
*/
        /* Exercice 9 */
/*
let chiffre = 5;

for(let multi = 0; multi < 10; multi++){
    root.innerHTML += chiffre + " x " + multi + " = "+  chiffre * multi + "<br>";
}
*/
 /* Exercice 10 */
 /*
 const root = document.getElementById('root');

 for(let chiffre = 0;chiffre<=5;chiffre++){
     if(chiffre == 1){
         root.innerHTML += chiffre + "<br>"
     }
     if(chiffre == 2){
         root.innerHTML += chiffre +""+chiffre+ "<br>"
     }
     if(chiffre == 3){
         root.innerHTML += chiffre +""+chiffre+''+chiffre+ "<br>"
     }
     if(chiffre == 4){
         root.innerHTML += chiffre +""+chiffre+''+chiffre+''+chiffre+ "<br>"
     }
     if(chiffre == 5){
         root.innerHTML += chiffre +""+chiffre+''+chiffre+''+chiffre+ ''+chiffre+"<br>"
     }
 }
 */
        /* Exercice 11 */
/*
let nombre = 0;
do{
    root.innerHTML += nombre + "<br>";
    nombre+=2
}while(nombre <= 20)
*/










