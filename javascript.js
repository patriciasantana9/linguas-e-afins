 
    function hora() {
        let daho = document.querySelector('div#daho')
        
        let horas = new Date()
        let datahora = horas.getHours()
        let minutos = horas.getMinutes()

        let dia = new Date()
        let diasem = dia.getDay() 

        let data = new Date()
        let datasem = data.getDate()

        let mesano = new Date()
        let mes = mesano.getMonth()  

        //daho.innerText = `${diasem}, ${datahora}:${minutos}`

        
        switch (diasem) {
            case 0:
                daho.innerText = `${datahora}:${minutos}, domingo, ${datasem} de`
                break;
        
            case 1:
                daho.innerText =`${datahora}:${minutos}, segunda-feira, ${datasem} de `
                break;

            case 2:
                daho.innerText = `${datahora}:${minutos}, terça-feira, ${datasem} de `
                break;

            case 3:
                daho.innerText = `${datahora}:${minutos}, quarta-feira, ${datasem} de `
                break;

            case 4:
                daho.innerText = `${datahora}:${minutos}, quinta-feira, ${datasem} de `
                break;

            case 5:
                daho.innerText = `${datahora}:${minutos}, sexta-feira, ${datasem} de `
                break;

            case 6:
                daho.innerText = `${datahora}:${minutos}, sábado, ${datasem} de `
                break;

            default:
                daho.innerText = '[ERRO]'
                break;
        }

        switch (mes) {
            case 0:
                daho.innerText += ` janeiro`
                break;
            case 1:
                daho.innerText += ` fevereiro`
                break;
            case 2:
                daho.innerText += ` março`
                break;
            case 3:
                daho.innerText += ` abril`
                break;
            case 4:
                daho.innerText += ` maio`
                break;
            case 5:
                daho.innerText += ` junho`
                break;
            case 6:
                daho.innerText += ` julho`
                break;
            case 7:
                daho.innerText += ` agosto`
                break;
            case 8:
                daho.innerText += ` setembro`
                break;
            case 9:
                daho.innerText += ` outubro`
                break;
            case 10:
                daho.innerText += ` novembro`
                break;
            case 11:
                daho.innerText += ` dezembro`
                break;

            default:
                break;
        }
        
        
    }
hora();  //isso faz com que a hora apareça sempre que a página for recarregada (mas isso deve acontecer quando a hora muda no sistema)
//fazer o carregamento ser automático, então tirar o código do HTML. Não deve ser quando a página for carregada, mas quando algo mudar no sistema

        //window.addEventListener('online', hora)     

/*function best() {    
    var age = Number(idade.value)
    
        if (age > 0 && age < 18) {
            melhor.innerText = 'aplicativos.html'
        } else if (age > 18 && age < 35) {
            melhor.innerText = 'dicas.html'
        } else if (age > 35) {
            melhor.innerText = 'importantes.html'
        }
}*/