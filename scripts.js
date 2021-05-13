/* Quadro home */

let dia = document.getElementById('dia');
let mes_ano = document.getElementById('mes-ano');
let horas = document.getElementById('horas');
let diaSemana = document.getElementById('dia-semana')
let img_hora = document.getElementById('img-hora');

var now = new Date()
var dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")

dia.innerHTML = (now.getDate());
mes_ano.innerHTML = ( '' + now.getMonth() + '/' + now.getFullYear());
diaSemana.innerHTML = (dayName[now.getDay()]);
horas.innerHTML = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

if(now.getHours() >= 12 && now.getHours() <= 18){
    img_hora.src = "img/tarde.jpg";
}
else if(now.getHours() > 18){
    img_hora.src = "img/noite.jpg";
}
else if(now.getHours() >= 6 && now.getHours() <= 12){
    img_hora.src = "img/manha.jpg";
}
