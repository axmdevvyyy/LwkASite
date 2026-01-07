// Placeholder for collision utilities (AABB, circle checks, etc.)
export function circleCollision(a, b){
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const r = (a.r || 0) + (b.r || 0);
  return dx*dx + dy*dy <= r*r;
}
