function vertabuada(){
    let ntab = document.getElementById('numtabuada')
    let tab = document.getElementById('txttabuada')
        
    if(ntab.value == false){
        window.alert('Por favor digite um número!')
    } else{
        let num = Number(ntab.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}