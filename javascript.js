function hora() {
    let daho = document.querySelector('div#daho')
    
    let horas = new Date()
    let datahora = horas.getHours()
    let minutos = horas.getMinutes()

    let dia = new Date()
    let diasem = dia.getDay() //como diabos colocar o dia em nome, não número?

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
    daho.innerText = `${diasem}, ${datahora}:${minutos}`
}

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

