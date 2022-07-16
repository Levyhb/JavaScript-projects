function calcularMedia(){

var redacao = window.document.getElementById('red')
var linguagens = window.document.getElementById ('ling')
var humanas = window.document.getElementById ('hum')
var matematica = window.document.getElementById('mat')
var cnatureza = window.document.getElementById ('nat')
var res = window.document.getElementById('res')

if(matematica.value.length == 0 || redacao.value.length == 0 || humanas.value.length == 0 || cnatureza.value.length == 0 || linguagens.value.length == 0 ){
    window.alert ('[ERRO] você não preencheu algum dado corretamente, revise e tente novamente.')
}
if(matematica.value > 1000 || redacao.value > 1000 || humanas.value > 1000 || cnatureza.value > 1000 || linguagens.value > 1000){
    alert (["[ERRO] Valor máximo permitido é 1000! revise os dados e tente novamente."])
}
else{
    var r = parseFloat(redacao.value)
    var m = parseFloat(matematica.value)
    var n = parseFloat(cnatureza.value)
    var h = parseFloat(humanas.value)
    var l = parseFloat(linguagens.value)

    var media = (r + m + n + h + l)/5 

    res.innerHTML = `A sua média foi de: ${media.toFixed(2)}`
    res.classList.add("resultado")
}

}
