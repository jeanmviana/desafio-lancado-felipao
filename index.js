// Desafio Classificador de Nível de Herói

let nickname = "maria dos pokemom"
let nivelDeXp = 1000

if(nivelDeXp <= 1000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Ferro. Parabéns! ")
}else if(nivelDeXp > 1001 && nivelDeXp <= 2000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Bronze. Parabéns!  ")
}else if(nivelDeXp > 2001 && nivelDeXp <= 5000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Prata. Parabéns! ")
}else if(nivelDeXp > 5001 && nivelDeXp <= 7000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Ouro. Parabéns! ")
}else if(nivelDeXp > 7001 && nivelDeXp <= 8000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Platina. Parabéns! ")
}else if(nivelDeXp > 8001 && nivelDeXp <= 9000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Ascendente. Parabéns! ")
}else if(nivelDeXp > 9001 && nivelDeXp <= 10000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Imortal. Parabéns! ")
}else if(nivelDeXp >= 10000){
    console.log(" O Herói de nome " + nickname + " Está no Nível de Radiante. Parabéns! ")
}

