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
function fotohora() {
    var agora = new Date()
    var hora = agora.getHours()

    if(hora > 12) {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'jovem.png')
        
    }
    
}
