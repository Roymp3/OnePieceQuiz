
function resposta1(){

if(localStorage.getItem("recorde") == null){
    localStorage.setItem("recorde", 0)
}

let point = parseInt(localStorage.getItem("recorde"))
let nome = ""
let ponto = 0
let resp = new Array(12)
let score = new Array(12)
if(point == undefined || point == 0 || point == NaN){

  localStorage.setItem("recorde", 0)
}

resp[0]  = document.getElementById("pergunta2").checked
resp[1] = document.getElementById("pergunta4").checked
resp[2] = document.getElementById("pergunta6").checked
resp[3] = document.getElementById("pergunta9").checked
resp[4] = document.getElementById("pergunta12").checked
resp[5] = document.getElementById("pergunta15").checked
resp[6] = document.getElementById("pergunta18").checked
resp[7] = document.getElementById("pergunta22").checked
resp[8] = document.getElementById("pergunta24").checked
resp[9] = document.getElementById("pergunta26").checked
resp[10] = document.getElementById("pergunta30").checked
resp[11] = document.getElementById("pergunta33").checked

if(resp[0] == true ){
 score[0] = 10;
  document.getElementById("resposta1").style.color = "green"
  document.getElementById("resposta1").textContent = "Acertou !!"

}
else{
 score[0] = 0;

 document.getElementById("resposta1").style.color = "red"
 document.getElementById("resposta1").textContent = "Errou !!"
}

if(resp[1] == true ){
   score[1] = 10;
   document.getElementById("resposta2").style.color = "green"
   document.getElementById("resposta2").textContent = "Acertou !!"

}
else{
  score[1] = 0;
  document.getElementById("resposta2").style.color = "red"
  document.getElementById("resposta2").textContent = "Errou !!"
}

if(resp[2] == true ){

   score[2]= 10;
   document.getElementById("resposta3").style.color = "green"
   document.getElementById("resposta3").textContent = "Acertou !!"

}
else{
  score[2] = 0;
  document.getElementById("resposta3").style.color = "red"
  document.getElementById("resposta3").textContent = "Errou !!"
}

if(resp[3] == true ){
 score[3]= 10;
 document.getElementById("resposta4").style.color = "green"
 document.getElementById("resposta4").textContent = "Acertou !!"

}
else{
score[3] = 0;
document.getElementById("resposta4").style.color = "red"
document.getElementById("resposta4").textContent = "Errou !!"
}

if(resp[4] == true ){

 score[4]= 10;
 document.getElementById("resposta5").style.color = "green"
 document.getElementById("resposta5").textContent = "Acertou !!"

}
else{
score[4] = 0;
document.getElementById("resposta5").style.color = "red"
document.getElementById("resposta5").textContent = "Errou !!"
}

if(resp[5] == true ){

score[5]= 10;
document.getElementById("resposta6").style.color = "green"
document.getElementById("resposta6").textContent = "Acertou !!"

}
else{
score[5] = 0;
document.getElementById("resposta6").style.color = "red"
document.getElementById("resposta6").textContent = "Errou !!"
}

if(resp[6] == true ){

score[6]= 10;
document.getElementById("resposta7").style.color = "green"
document.getElementById("resposta7").textContent = "Acertou !!"

}
else{
score[6] = 0;
document.getElementById("resposta7").style.color = "red"
document.getElementById("resposta7").textContent = "Errou !!"
}

if(resp[7] == true ){

score[7]= 10;
document.getElementById("resposta8").style.color = "green"
document.getElementById("resposta8").textContent = "Acertou !!"

}
else{
score[7] = 0;
document.getElementById("resposta8").style.color = "red"
document.getElementById("resposta8").textContent = "Errou !!"
}

if(resp[8] == true ){

score[8]= 10;
document.getElementById("resposta9").style.color = "green"
document.getElementById("resposta9").textContent = "Acertou !!"

}
else{
score[8] = 0;
document.getElementById("resposta9").style.color = "red"
document.getElementById("resposta9").textContent = "Errou !!"
}

if(resp[9] == true ){

score[9]= 10;
document.getElementById("resposta10").style.color = "green"
document.getElementById("resposta10").textContent = "Acertou !!"

}
else{
score[9] = 0;
document.getElementById("resposta10").style.color = "red"
document.getElementById("resposta10").textContent = "Errou !!"
}

if(resp[10] == true ){

score[10]= 10;
document.getElementById("resposta11").style.color = "green"
document.getElementById("resposta11").textContent = "Acertou !!"

}
else{
score[10] = 0;
document.getElementById("resposta11").style.color = "red"
document.getElementById("resposta11").textContent = "Errou !!"
}

if(resp[11] == true ){

score[11]= 10;
document.getElementById("resposta12").style.color = "green"
document.getElementById("resposta12").textContent = "Acertou !!"

}
else{
score[11] = 0;
document.getElementById("resposta12").style.color = "red"
document.getElementById("resposta12").textContent = "Errou !!"
}


ponto = score[0] + score[1] + score[2] + score[3] + score[4] + score[5] + score[6] + score[7] + score[8] + score[9] + score[10] + score[11];

if(ponto > point){
  nome = prompt("Novo recorde, informe seu nick: ")
  localStorage.setItem("novoRecorde", nome)
  localStorage.setItem("recorde",ponto)
  document.getElementById("saida2").textContent = `Recorde: ${localStorage.getItem("recorde")} (${localStorage.getItem("novoRecorde")})`

}
else{

  document.getElementById("saida2").textContent = ` Recorde: ${localStorage.getItem("recorde")} (${localStorage.getItem("novoRecorde")})`
}
document.getElementById("saida").textContent = ` SCORE: ${ponto} `
}
function refresh(){

    window.location.reload();
    window.scrollTo(0,0)
}

