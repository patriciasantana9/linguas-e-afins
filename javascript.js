function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('#daho').textContent = time 
}
 
displayTime();
const criarRelogio = setInterval(displayTime, 1000)

let input = document.querySelector(".email");
let o_email = input.value;
let enviar_email = document.querySelector("#enviar_email");
//função sobre registro do e-mail
enviar_email.addEventListener('click', () => {
    if (o_email !== " ") {
        alert('E-mail cadastrado com sucesso!');
    } else {
        alert('Digite um e-mail válido.')
    }
    o_email.value = '';
    o_email.focus();
})