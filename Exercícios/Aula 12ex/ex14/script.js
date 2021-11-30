function carregar(){
    var msg = document.getElementById('hora')
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if(hora > 0 && hora < 12){
        img.src = 'images/manha.png'
        document.body.style.backgroundColor = '#faef94'

        }else if(hora > 12 && hora <= 18){
            img.src = 'images/tarde.png'
            document.body.style.backgroundColor = '#ffbd57'

        }else{
            img.src = 'images/noite.png'
            document.body.style.backgroundColor = '#0d4069'
        }
    
}