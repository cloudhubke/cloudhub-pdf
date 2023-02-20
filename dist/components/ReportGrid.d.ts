declare const ReportGrid: {
    ({ columns, data, summary, rowComponent, cellComponent, rowStyle, ...props }: {
        [x: string]: any;
        columns: any;
        data: any;
        summary: any;
        rowComponent: any;
        cellComponent: any;
        rowStyle: any;
    }): any;
    defaultProps: {
        columns: any[];
        summary: {};
        data: any[];
    };
};
export default ReportGrid;
