// Entry point (ES module)
import { initMenu } from './ui/menu.js';
import { initSettings } from './ui/settings.js';
import { initCharacterSelect } from './ui/characterSelect.js';
import { Game } from './engine/gameLoop.js';

const canvas = document.getElementById('gameCanvas');

const game = new Game({ canvas });

document.getElementById('startBtn').addEventListener('click', () => {
  // Start a new run (basic)
  showScreen('gameScreen');
  game.start();
});
document.getElementById('exitToMenu').addEventListener('click', () => {
  game.stop();
  showScreen('menu');
});

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}

/* Initialize UI modules */
initMenu({ showScreen, game });
initSettings();
initCharacterSelect();

export { game, showScreen };
