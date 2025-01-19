

const lampadina = document.getElementById(`lampadina`);
const btn = document.getElementById(`btn`)

btn.addEventListener(`click`,() => {
    if(lampadina.src.includes(`white_lamp.png`)){
        lampadina.src = `yellow_lamp.png`;
        btn.textContent = `Spegni`;
    }else{
        lampadina.src = `white_lamp.png`;
        btn.textContent = `Accendi`
    }
})

