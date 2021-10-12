export default interface Navigation {
  label: string;
  route?: string;
  icon?: string;
  subItems?: Navigation[];
}
