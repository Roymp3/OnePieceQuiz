function resposta1(){

  let resp = new Array(12);
     resp[0]  = document.getElementById("pergunta2").checked
     resp[1] = document.getElementById("pergunta4").checked
     resp[2] = document.getElementById("pergunta6").checked
     resp[3] = document.getElementById("pergunta11").checked
     resp[4] = document.getElementById("pergunta12").checked
     resp[5] = document.getElementById("pergunta15").checked
     resp[6] = document.getElementById("pergunta18").checked
     resp[7] = document.getElementById("pergunta22").checked
     resp[8] = document.getElementById("pergunta24").checked
     resp[9] = document.getElementById("pergunta26").checked
     resp[10] = document.getElementById("pergunta30").checked
     resp[11] = document.getElementById("pergunta33").checked
    let score = new Array(12);
    let  soma = new Array(2);
    if(resp[0] == true ){

       score[0] = 10;

    }
    else{
      score[0] = 0;
    }

    if(resp[1] == true ){
        score[1] = 10;

     }
     else{
       score[1] = 0;
     }

     if(resp[2] == true ){

        score[2]= 10;

     }
     else{
       score[2] = 0;
     }

     if(resp[3] == true ){

      score[3]= 10;

     }
     else{
     score[3] = 0;
     }

     if(resp[4] == true ){

      score[4]= 10;

   }
   else{
     score[4] = 0;
   }

   if(resp[5] == true ){

    score[5]= 10;

   }
  else{
   score[5] = 0;
  }

  if(resp[6] == true ){

    score[6]= 10;

 }
 else{
   score[6] = 0;
 }

 if(resp[7] == true ){

  score[7]= 10;

}
else{
 score[7] = 0;
}

if(resp[8] == true ){

  score[8]= 10;

}
else{
 score[8] = 0;
}

if(resp[9] == true ){

  score[9]= 10;

}
else{
 score[9] = 0;
}

if(resp[10] == true ){

  score[10]= 10;

}
else{
 score[10] = 0;
}

if(resp[11] == true ){

  score[11]= 10;

}
else{
 score[11] = 0;
}


  soma[0] = score[0] + score[1] + score[2] + score[3] + score[4] + score[5] + score[6] + score[7] + score[8] + score[9] + score[10] + score[11];
  soma[1] = soma[0]
  localStorage.setItem("soma", soma[0])
  localStorage.setItem("record",soma[1])
  let consulta = localStorage.getItem("soma");
  let recorde = localStorage.getItem("record")

 if(recorde > consulta){
  localStorage.setItem("record",soma[1])
  document.getElementById("saida2").textContent = recorde
  document.getElementById("saida").textContent = consulta

 }
 else{
  document.getElementById("saida2").textContent = consulta
  document.getElementById("saida").textContent = consulta
 }


  console.log("função 1")

}