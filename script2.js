function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os valores e tente novamente')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            img.src = 'ftbbmasc.jpg'
        } else if (idade > 10 && idade < 21){
            img.src = 'ftjvmasc.jpg'
        } else if (idade < 60){
            img.src = 'ftadmasc.jpg'
        } else {
            img.src = 'ftidmasc.jpg'
        }
    } else if(fsex[1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.src = 'ftbbfem.jpg'
        } else if (idade > 10 && idade < 21){
            img.src = 'ftjvfem.jpg'
        } else if (idade < 60){
            img.src = 'ftadfem.jpg'
        } else {
            img.src = 'ftidfem.jpg'
        }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    } 

    
}