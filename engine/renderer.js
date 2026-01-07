export class Renderer {
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
  }
  clear(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    // subtle vignette background
    this.ctx.fillStyle = '#041018';
    this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
  }
  drawGrid(){
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.02)';
    for(let x=0;x<this.canvas.width;x+=64){
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,this.canvas.height); ctx.stroke();
    }
    for(let y=0;y<this.canvas.height;y+=64){
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(this.canvas.width,y); ctx.stroke();
    }
    ctx.restore();
  }
  drawPlayer(p){
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p.x,p.y);
    // glow
    ctx.fillStyle = 'rgba(42,246,255,0.08)';
    ctx.beginPath(); ctx.arc(0,0,28,0,Math.PI*2); ctx.fill();
    // core
    ctx.fillStyle = '#7cf29c';
    ctx.beginPath(); ctx.arc(0,0,12,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }
}
