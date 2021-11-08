import Link from './Link';

export default interface Ancestry {
  name: Link;
  rarity: string;
  hitPoints: string;
  size: string;
  speed: string;
  abilityBoost: string;
  languages: string;
  traits?: string[];
  cultures?: Link[];
  startingAncestryFeats?: string[];
  description: string;
}
