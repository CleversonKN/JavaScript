function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anof = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (anof.value == 0 || Number(anof.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sexof = document.getElementsByName('sexo')
        var idade = ano - Number(anof.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexof[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 5){
                //Bebê
                img.setAttribute('src', 'images/homem-bebe.png')
            }else if(idade > 5 && idade < 12){
                //Criança
                img.setAttribute('src', 'images/homem-criança.png')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'images/homem-jovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'images/homem-adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'images/homem-idoso.png')
            }
        }else if (sexof[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 5){
                //Bebê
                img.setAttribute('src', 'images/mulher-bebe.png')
            }else if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'images/mulher-criança.png')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'images/mulher-jovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'images/mulher-adulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'images/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}