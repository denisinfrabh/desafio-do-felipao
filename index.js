let nomeDoHeroi  ="Jar Jar Binks"
let nivel = 10000
let experiencia = ""

if(nivel<=1000){
    experiencia = "FERRO"
}else if((nivel>=1001) && (nivel<=2000)){
    experiencia = "BRONZE"
}if((nivel>=2001) && (nivel<=5000)){
    experiencia = "PRATA"
}else if((nivel>=6001) && (nivel<=7000)){
    experiencia = "OURO"
}if((nivel>=7001 && (nivel<=8000))){
    experiencia = "PLATINA"
}else if((nivel>=8001) && (nivel<=9000)){
    experiencia = "ASCENDENTE"
}if((nivel>=9001) && (nivel <=10000)){
    experiencia  ="IMORTAL"
}else if(nivel>=10001){
    experiencia = "RADIANTE"
}

console.log("O Herói: "+ nomeDoHeroi +" esta no nivel: "+experiencia)