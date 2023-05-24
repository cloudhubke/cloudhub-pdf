import React from 'react';
import { sizes } from '../theme';
import HeaderRow from './HeaderRow';
import Block from './Block';
import Grid from './Grid';
import SummaryRow from './SummaryRow';

interface DataColumn {
  key: string;
  value: any;
  width: number;
  render?: (params: {
    row?: any;
    Text?: React.ReactNode;
    Block?: React.ReactNode;
  }) => React.ReactElement;
}

type DataRow = Array<DataColumn>;

const ReportGrid = ({
  columns,
  data,
  summary,
  rowComponent,
  cellComponent,
  detailComponent,
  rowStyle,
  ...props
}: {
  columns: Array<{
    name: string;
    title: string;
    width?: number;
    render?: (params: {
      row?: any;
      Text?: React.ReactNode;
    }) => React.ReactElement;
  }>;
  data: Array<any>;
  /**
   * @description The summary key is one of the column names, and the value is a function that takes an array of data and returns a value
   */
  summary: {
    [key: string]: (params: { data: Array<any> }) => any;
  };
  rowComponent?: (params: {
    index: number;
    key: string;
    row: any;
    datarow: DataRow;
  }) => React.ReactElement;
  cellComponent?: (params: { column: string; row: any }) => React.ReactElement;
  detailComponent?: (params: {
    row: any;
    Text?: React.ReactNode;
    Block?: React.ReactNode;
  }) => React.ReactElement;
  rowStyle?: any;
}) => (
  // const rowComponent = ({ index, ...props }) => (
  //   <DataRow
  //     {...props}
  //     color={index % 2 === 0 ? colors.gray3 : null}
  //     wrap={false}
  //   />
  // );

  // const cellComponent = ({ column, row }) => {
  //   if (column === 'Phone') {
  //     return (
  //       <GridCell>
  //         <Text small>{`${row.Phone}`}</Text>
  //       </GridCell>
  //     );
  //   }

  //   return (
  //     <GridCell>
  //       <Text>{`${row[column]}`}</Text>
  //     </GridCell>
  //   );
  // };

  <Block
    flex={false}
    margin={[0, sizes.margin * 1.5, 0, sizes.margin * 2]}
    {...props}
  >
    <HeaderRow columns={columns} />
    <Grid
      data={data}
      columns={columns}
      rowComponent={rowComponent}
      cellComponent={cellComponent}
      detailComponent={detailComponent}
      rowStyle={rowStyle}
    />
    <SummaryRow data={data} columns={columns} summary={summary} />
  </Block>
);
ReportGrid.defaultProps = {
  columns: [],
  summary: {},
  data: []
};
export default ReportGrid;
