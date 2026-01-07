import { CHARACTERS } from '../data/characters.js';

export function initCharacterSelect(){
  const container = document.getElementById('characterCards');
  container.innerHTML = '';
  CHARACTERS.forEach(c => {
    const div = document.createElement('div');
    div.className = 'card' + (c.locked ? ' locked' : '');
    div.innerHTML = `
      <h3>${c.name}</h3>
      <p><strong>Role:</strong> ${c.role}</p>
      <p>${c.description}</p>
    `;
    container.appendChild(div);
    if(!c.locked){
      div.addEventListener('click', () => {
        localStorage.setItem('neon_selected_character', c.id);
        alert(c.name + ' selected (MVP)');
      });
    }
  });
}
