export const CHARACTERS = [
  {
    id: 'runner',
    name: 'The Runner',
    role: 'Speed / Dodge',
    description: 'Fast, high dodge. Dash through enemies.',
    stats: { health: 80, energy: 60, speed: 140, damage: 8 },
    locked: false
  },
  {
    id: 'enforcer',
    name: 'The Enforcer',
    role: 'Tank / Melee',
    description: 'Heavy melee, can shield bash to stun.',
    stats: { health: 140, energy: 40, speed: 80, damage: 14 },
    locked: false
  },
  {
    id: 'hacker',
    name: 'The Hacker',
    role: 'Ranged / Control',
    description: 'Deploys turrets, hacks enemies.',
    stats: { health: 90, energy: 100, speed: 100, damage: 10 },
    locked: true
  },
  {
    id: 'revenant',
    name: 'The Revenant',
    role: 'Risk / Lifesteal',
    description: 'Drains health on kills; high risk/reward.',
    stats: { health: 100, energy: 60, speed: 110, damage: 12 },
    locked: true
  }
];
