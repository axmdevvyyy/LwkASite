export function initSettings(){
  const container = document.getElementById('settingsContent');
  container.innerHTML = `
    <label>Master Volume: <input type="range" id="masterVol" min="0" max="1" step="0.01" value="0.8"></label>
    <br>
    <label>Pixel Scale: <select id="pixelScale"><option value="1">1x</option><option value="2">2x</option></select></label>
    <br><small>Settings saved to localStorage</small>
  `;
  const masterVol = document.getElementById('masterVol');
  masterVol.addEventListener('input', () => {
    localStorage.setItem('neon_master_vol', masterVol.value);
  });
  // load
  const saved = localStorage.getItem('neon_master_vol');
  if (saved) masterVol.value = saved;
}
