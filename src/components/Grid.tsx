import React from 'react';
import Block from './Block';
import Text from './Text';
import DataRow from './DataRow';
import { colors, sizes } from '../theme';

interface DataColumn {
  key: string;
  value: any;
  width: number;
  render?: (params: {
    row?: any;
    Text?: React.ReactNode;
  }) => React.ReactElement;
}

type IDataRow = Array<DataColumn>;

const Grid = ({
  data,
  columns,
  getRowId,
  rowComponent,
  cellComponent,
  detailComponent,
  rowStyle = {},
  rowProps = {}
}: {
  data: Array<any>;
  columns: Array<{
    name: string;
    title: string;
    width?: number;
    render?: (params: {
      row?: any;
      Text?: React.ReactNode;
      Block?: React.ReactNode;
    }) => React.ReactElement;
  }>;
  getRowId?: (row: any, index: number) => string;
  /**
   *
   * @description key is the column name, I is the iteration (of column keys or names) that makes up a row
   */
  rowComponent?: (params: {
    index: number;
    key: string;
    row: any;
    datarow: IDataRow;
    Text?: React.ReactNode;
    Block?: React.ReactNode;
  }) => React.ReactElement;
  cellComponent?: (params: { column: string; row: any }) => React.ReactElement;
  detailComponent?: (params: {
    row: any;
    Text?: React.ReactNode;
    Block?: React.ReactNode;
  }) => React.ReactElement;
  rowStyle?: any;
  rowProps?: any;
}) => (
  <Block>
    {data.map((row, index) => {
      const datarow = columns.map((col) => ({
        key: col.name,
        value: row[col.name],
        width: col.width,
        render: col.render
      }));

      const rowkey = getRowId(row, index);

      if (rowComponent && typeof rowComponent === 'function') {
        return rowComponent({
          key: rowkey,
          index,
          row,
          datarow,
          Block,
          Text
        });
      }
      return (
        <React.Fragment key={`${rowkey}-${index}`}>
          <DataRow
            row={row}
            datarow={datarow}
            cellComponent={cellComponent}
            style={{
              ...(detailComponent && { borderBottomWidth: 0 }),
              ...rowStyle
            }}
            {...rowProps}
          />

          {detailComponent && (
            <Block
              flex={false}
              row
              wrap={false}
              style={{
                paddingTop: 5,
                marginLeft: sizes.margin * 2,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.gray
              }}
            >
              {detailComponent({ row, Text, Block })}
            </Block>
          )}
        </React.Fragment>
      );
    })}
  </Block>
);

Grid.defaultProps = {
  rowComponent: null,
  cellComponent: null,
  data: [],
  columns: [],
  getRowId: (row, index) => (row ? row.id || index : index)
};

export default Grid;
