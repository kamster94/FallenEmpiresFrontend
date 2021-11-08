import Table, { Cell, Row } from '@/models/Table';

type DataTable = { dataTable: Table };

export default function useDataTable(
  headers: string[],
  dataSet: any[],
  dataColumns: string[]
): DataTable {
  const dataTable: Table = {
    headers: headers,
    rows: []
  };

  dataSet.forEach((dataPiece) => {
    const row: Row = {
      cells: []
    };

    dataColumns.forEach((property) => {
      row.cells.push(convertToCell(dataPiece[property], property));
    });

    dataTable.rows.push(row);
  });

  return {
    dataTable
  };
}

function convertToCell(data: any, property: string) {
  return Array.isArray(data)
    ? property === 'tags'
      ? mapToTags(data)
      : mapToList(data)
    : mapToText(data);
}

function mapToList(data: any) {
  return {
    list: data.map((item: any) => {
      if (Object.prototype.hasOwnProperty.call(item, 'route')) {
        return mapToLink(item);
      }
      return { label: item };
    })
  };
}

function mapToTags(data: any) {
  return {
    tags: data
  };
}

function mapToText(data: any) {
  if (Object.prototype.hasOwnProperty.call(data, 'route')) {
    return { text: mapToLink(data) };
  }
  return { text: { label: data } } as Cell;
}

function mapToLink(data: any) {
  return { label: data.label, route: data.route };
}
