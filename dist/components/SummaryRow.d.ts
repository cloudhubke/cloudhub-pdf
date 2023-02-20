declare const SummaryRow: {
    ({ columns, data, summary, style, ...props }: {
        [x: string]: any;
        columns: any;
        data: any;
        summary: any;
        style: any;
    }): any;
    defaultProps: {
        columns: any[];
        summary: {};
    };
};
export default SummaryRow;
