export default interface Feat {
  title: string;
  category: string;
  tags?: string[];
  prerequisites?: string;
  frequency?: string;
  trigger?: string;
  text: string;
  source?: string;
}
