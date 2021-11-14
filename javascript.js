function best() {
    //var idade = 22
    //var age = document.getElementById('idade')
    var age = Number(idade.value)
    //var better = document.getElementById('')
        if (age > 0 && age < 18) {
            melhor.innerText = 'aplicativos.html'
        } else if (age > 18 && age < 35) {
            melhor.innerText = 'dicas.html'
        } else if (age > 35) {
            melhor.innerText = 'importantes.html'
        }
}
/*function fotohora() {
    var agora = new Date()
    var hora = agora.getHours()
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    while(hora >= 12) {
        img = setAttribute('src', 'jovem.png')
        
    }
    
}*/
