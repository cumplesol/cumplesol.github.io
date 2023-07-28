
  const cumple = new Date('2023-11-11T00:00:00');
  const diasEl = document.getElementById('dias');
  const horasEl = document.getElementById('horas');
  const minutosEl = document.getElementById('minutos');
  const segundosEl = document.getElementById('segundos');
  
  function actualizarCuentaRegresiva() {
    const ahora = new Date();
    
    const diferencia = cumple - ahora;
    
    const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferencia / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferencia / 1000 / 60) % 60;
    const segundos = Math.floor(diferencia / 1000) % 60;
    
    diasEl.textContent = dias.toString().padStart(2, '0');
    horasEl.textContent = horas.toString().padStart(2, '0');
    minutosEl.textContent = minutos.toString().padStart(2, '0');
    segundosEl.textContent = segundos.toString().padStart(2, '0');
  }
  
  actualizarCuentaRegresiva();
  setInterval(actualizarCuentaRegresiva, 1000);
  
