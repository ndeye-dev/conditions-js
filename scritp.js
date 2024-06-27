
let age = parseInt(prompt("Ecrivez  votre age :"));

if (age <= 14 ) {
    document.write("Vous etes Enfants");
} else if (age <= 25){
    document.write("Vous etes Adolescents");
} else if (age <= 64 ){
    document.write ("Vous etes Adultes");
} else if (age > 65 ){
    document.write("Vous etes Ainés ");
} else {
    document.write("Veuillez ecrire votre age ")
}
