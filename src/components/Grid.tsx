import React from 'react';
import Block from './Block';
import DataRow from './DataRow';

const Grid = ({
  data,
  columns,
  getRowId,
  rowComponent,
  cellComponent,
  rowStyle = {}
}) => (
  <Block>
    {data.map((row, index) => {
      const datarow = columns.map((col) => ({
        key: col.name,
        value: row[col.name],
        width: col.width,
        render: col.render
      }));

      const rowkey = getRowId(row);

      if (rowComponent && typeof rowComponent === 'function') {
        return rowComponent({
          key: rowkey,
          index,
          row,
          datarow
        });
      }
      return (
        <DataRow
          key={`${rowkey}-${index}`}
          row={row}
          datarow={datarow}
          cellComponent={cellComponent}
          style={{ ...rowStyle }}
        />
      );
    })}
  </Block>
);

Grid.defaultProps = {
  rowComponent: null,
  cellComponent: null,
  data: [],
  columns: [],
  getRowId: (row) => (row ? row.id : null)
};

export default Grid;
