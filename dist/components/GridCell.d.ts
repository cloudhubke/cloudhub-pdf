declare const GridCell: {
    ({ title, width, style, children, ...props }: {
        [x: string]: any;
        title: any;
        width: any;
        style: any;
        children: any;
    }): any;
    defaultProps: {
        cellComponent: any;
        middle: boolean;
    };
};
export default GridCell;
