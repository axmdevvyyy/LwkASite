import { Input } from './input.js';
import { Renderer } from './renderer.js';

export class Game {
  constructor({ canvas }){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.running = false;
    this.last = 0;
    this.input = new Input();
    this.renderer = new Renderer(this.ctx, canvas);
    this.state = {
      player: { x: canvas.width/2, y: canvas.height/2, hp: 100, energy: 50 }
    };
  }

  start(){
    if(this.running) return;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this._loop.bind(this));
  }

  stop(){
    this.running = false;
  }

  _loop(ts){
    if(!this.running) return;
    const dt = (ts - this.last) / 1000;
    this.last = ts;
    this._update(dt);
    this._render(dt);
    requestAnimationFrame(this._loop.bind(this));
  }

  _update(dt){
    // very basic movement for MVP
    const speed = 220;
    if(this.input.isDown('ArrowUp') || this.input.isDown('w')) this.state.player.y -= speed * dt;
    if(this.input.isDown('ArrowDown') || this.input.isDown('s')) this.state.player.y += speed * dt;
    if(this.input.isDown('ArrowLeft') || this.input.isDown('a')) this.state.player.x -= speed * dt;
    if(this.input.isDown('ArrowRight') || this.input.isDown('d')) this.state.player.x += speed * dt;

    // clamp
    this.state.player.x = Math.max(0, Math.min(this.canvas.width, this.state.player.x));
    this.state.player.y = Math.max(0, Math.min(this.canvas.height, this.state.player.y));

    // update HUD
    document.getElementById('hpVal').textContent = Math.round(this.state.player.hp);
    document.getElementById('enVal').textContent = Math.round(this.state.player.energy);
  }

  _render(dt){
    this.renderer.clear();
    this.renderer.drawGrid();
    this.renderer.drawPlayer(this.state.player);
  }
}
