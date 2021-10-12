import Link from './Link';

export default interface Table {
  headers: string[];
  rows: Row[];
}

export interface Cell {
  text?: Link;
  list?: Link[];
  tags?: string[];
}

export interface Row {
  cells: Cell[];
}
