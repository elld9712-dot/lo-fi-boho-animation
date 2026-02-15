// --- Створення дощу ---
const windowEl = document.querySelector('.window');
for(let i = 0; i < 50; i++){
  let drop = document.createElement('div');
  drop.classList.add('rain');
  drop.style.left = Math.random() * windowEl.offsetWidth + 'px';
  drop.style.animationDuration = (0.5 + Math.random() * 1.5) + 's';
  windowEl.appendChild(drop);
}

// --- Партикли в кімнаті ---
const room = document.querySelector('.room');
for(let i = 0; i < 30; i++){
  let particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.bottom = Math.random() * 100 + 'px';
  particle.style.animationDuration = (3 + Math.random() * 2) + 's';
  room.appendChild(particle);
}

// --- Лампа мерехтить динамічно ---
const lamp = document.querySelector('.lamp');
setInterval(() => {
  const intensity = Math.random() * 0.5 + 0.5;
  lamp.style.boxShadow = `0 0 ${intensity*40}px rgba(255,200,150,${intensity})`;
}, 300);
