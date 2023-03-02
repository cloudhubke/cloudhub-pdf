declare const GridCell: {
    ({ title, width, style, children, ...props }: {
        [key: string]: any;
        title?: string;
        width?: number;
        style?: any;
        children?: any;
    }): any;
    defaultProps: {
        cellComponent: any;
        middle: boolean;
    };
};
export default GridCell;
