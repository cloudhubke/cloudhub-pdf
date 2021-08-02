import React from 'react';
import { sizes } from '../theme';
import HeaderRow from './HeaderRow';
import Block from './Block';
import Grid from './Grid';
import SummaryRow from './SummaryRow';

const ReportGrid = ({
  columns,
  data,
  summary,
  rowComponent,
  cellComponent,
  rowStyle,
  ...props
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
