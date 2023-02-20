declare const DataRow: {
    ({ row, datarow, cellComponent, style, ...props }: {
        [x: string]: any;
        row: any;
        datarow: any;
        cellComponent: any;
        style: any;
    }): any;
    defaultProps: {
        row: any[];
    };
};
export default DataRow;
