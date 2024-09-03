// Part 1

let numImg = 1;

function altImg(){
    let img = document.getElementById('bg');
    if (numImg == 1) {
        img.setAttribute('src', './Image/3.jpg');
        numImg = 2;
    } else {
        img.setAttribute('src', './Image/2.jpg');
        numImg = 1;
    }
}

let timerAlt = setInterval("altImg()", 2000);

function stopAlt() {
    clearInterval(timerAlt);
}

function startAlt(){
 timerAlt = setInterval("altImg()", 2000);
}

document.getElementById("stop").addEventListener("click", stopAlt);
document.getElementById("start").addEventListener("click", startAlt);


let tab = ["0.jpg", "5.jpg", "7.jpg"];
let cptImg = 0;

function suivant(){
    cptImg++;
    if (cptImg == tab.length){
        cptImg = 0;
    }
    bg2.setAttribute("src", "./Image/" + tab[cptImg]);
}

function precedent(){
    cptImg--;
    if (cptImg < 0){
        cptImg = 2;
    }
    bg2.setAttribute("src", "./Image/" + tab[cptImg]);
}

document.getElementById("suiv").addEventListener("click", suivant);
document.getElementById("prece").addEventListener("click", precedent);

let tab2 = ["12.jpg", "11.jpg", "16.jpg"]
let cptSwap = 0

function swapDroite(){
    cptSwap++;
    if(cptSwap == 1){
        bg3.src = "./Image/" + tab2[cptSwap];
        bg4.src = "./Image/" + tab2[cptSwap-1];
    } else if (cptSwap == 2){
        bg4.src = "./Image/" + tab2[cptSwap];
        bg5.src = "./Image/" + tab2[cptSwap-2];
     } else if (cptSwap > 2){
        cptSwap = 0
        bg5.src = "./Image/" + tab2[cptSwap+1];
        bg3.src = "./Image/" + tab2[cptSwap];
    }
}
