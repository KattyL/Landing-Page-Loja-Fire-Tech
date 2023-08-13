function inicio() {
let nome = window.prompt('Qual é o seu nome?')
let res = window.document.getElementById('resultado')
// Também funciona com o comando abaixo
// let res = window.document.querySelector('section#resultado')
res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer!
&#x1F596;`
}
