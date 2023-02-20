declare const Grid: {
    ({ data, columns, getRowId, rowComponent, cellComponent, rowStyle }: {
        data: any;
        columns: any;
        getRowId: any;
        rowComponent: any;
        cellComponent: any;
        rowStyle?: {};
    }): any;
    defaultProps: {
        rowComponent: any;
        cellComponent: any;
        data: any[];
        columns: any[];
        getRowId: (row: any) => any;
    };
};
export default Grid;
