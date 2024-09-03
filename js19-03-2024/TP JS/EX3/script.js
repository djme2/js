let nb1 = prompt("Quelle table ?");


while (isNaN(nb1)){
   nb1 = prompt("Un nombre j'ai dit !")
}

for (cpt2 = 1 ; cpt2 < nb1 ; cpt2++){
    
}


document.write("<table>");

for (cpt1 = 1 ; cpt1 <= 10 ; cpt1++){

document.write("<tr>");
document.write("<td>" + nb1 + "</td>")
document.write("<td>" + " x "+ cpt1 + "</td>")
document.write("<td>" + " = " + (nb1*cpt1) + "</td>")
document.write("</tr>");
}


document.write("</table>");
