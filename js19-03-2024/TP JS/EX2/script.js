function calcFacto(nb1){
    let cpt1 = 1;
    let resuFac = 1;
    
    while(cpt1 <= nb1){
        resuFac = resuFac * cpt1;
        cpt1++;
    }
    resultat.innerHTML = resuFac;
    return resuFac;
}

function somFacto(nb1){
    let resuFin = 0;
    for(cpt2 = 1 ; cpt2 <= nb1 ; cpt2++){
        resuFin = resuFin + calcFacto(cpt2);
    }
    total.innerHTML = resuFin;
}