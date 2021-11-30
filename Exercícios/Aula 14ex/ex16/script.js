function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for( c = i ; c <= f ; c =+ p ){
                res.innerHTML =+ `${c} \u{1F449} `
            }  
        } else{
            //Contagem regressiva
            for(let c = i; i >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } 
        res.innerHTML =+ `\u{1f3c1}`  
    }
}

