function calculatip(e){
    e.preventDefault();
    let conta = document.getElementById('conta').value;
    let servico = document.getElementById('servicequal').value;
    let pessoas = document.getElementById('people').value;
    
    if(conta == "" | servico == 0 ){
        alert("por favor, preencha os valores")
        return;
    }
    if(pessoas ==''| pessoas<=1){
        pessoas=1;
        document.getElementById('each').style.display = "none";

    }else{
        document.getElementById('each').style.display = "block"
    }
    let total  = (conta*servico)/pessoas;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totaltip").style.display = "block";

}
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsform").addEventListener('submit', calculatip)
 