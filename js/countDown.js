const topDate = new Date('November 20, 2022 13:00:00 GMT-0300');
const updateClock = (date) => {
    if(!date) return;
    let end = date.getTime();
    let now = Date.now();
    let diff = end - now;

    if(diff < 0) {
     // <- si el reloj ya mostró todo en cero, lo remuevo del DOM
    clearInterval(interval);
    let visor = document.getElementById('visor');
    document.getElementById('clock').removeChild(visor);
    } 
    
    else {
    let days = Math.floor(diff / 86400000);
    diff = diff % 86400000
    let hours = Math.floor(diff / 3600000);
    diff = diff % 3600000;
    let minutes = Math.floor(diff / 60000);
    diff = diff % 60000;
    let seconds = Math.floor(diff / 1000);
    
    document.getElementById('hours').innerHTML =  `${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} segundos `;

    }
}

  // se llama a la función una vez para que pinte el resultado inmediatamente
updateClock(topDate);
  // se hace uso de setInterval para cambiar el contador cada 1 segundo
const interval = setInterval(updateClock, 1000, topDate)