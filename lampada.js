

const lampadina = document.getElementById(`lampadina`);
const btn = document.getElementById(`btn`);

btn.addEventListener(`click`, function(){
    console.log(lampadina);
    lampadina.src = "./img-5/yellow_lamp.png";
})

