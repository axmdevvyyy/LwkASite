// Simple SPA-style menu wiring
export function initMenu(ctx = {}) {
  const { showScreen } = ctx;
  document.getElementById('charactersBtn').addEventListener('click', () => {
    showScreen('characterSelect');
  });
  document.getElementById('settingsBtn').addEventListener('click', () => {
    showScreen('settings');
  });
  document.getElementById('codexBtn').addEventListener('click', () => {
    alert('Codex - not implemented (MVP)');
  });
  document.getElementById('backFromCharacters').addEventListener('click', () => {
    showScreen('menu');
  });
  document.getElementById('backFromSettings').addEventListener('click', () => {
    showScreen('menu');
  });
}
