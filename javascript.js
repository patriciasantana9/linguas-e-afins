function best() {    
    var age = Number(idade.value)
    
        if (age > 0 && age < 18) {
            melhor.innerText = 'aplicativos.html'
        } else if (age > 18 && age < 35) {
            melhor.innerText = 'dicas.html'
        } else if (age > 35) {
            melhor.innerText = 'importantes.html'
        }
}

function hora(){
    var daho = document.getElementById('daho')

    var horas = new Date()
    var datahora = horas.getHours()
    var data = new Date()
    var horadata = data.getDay()

    daho.innerText = `${horadata}, ${datahora}`
}