export const RELICS = [
  {
    id: 'chain_lightning',
    name: 'Chain Lightning',
    description: 'Projectiles bounce between enemies.',
    effect: { bounce: 2 },
    tier: 1
  },
  {
    id: 'blood_pact',
    name: 'Blood Pact',
    description: 'Damage costs some health.',
    effect: { damage_to_self_pct: 0.05 },
    tier: 1
  },
  {
    id: 'time_warp',
    name: 'Time Warp',
    description: 'Slows enemies when player is low HP.',
    effect: { slow_on_low_hp: true },
    tier: 2
  },
  {
    id: 'overheat_core',
    name: 'Overheat Core',
    description: 'Increases damage but inflicts burn.',
    effect: { dmg_mult: 1.25, self_burn: true },
    tier: 2
  }
];
