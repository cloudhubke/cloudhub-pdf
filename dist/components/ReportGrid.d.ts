import React from 'react';
interface DataColumn {
    key: string;
    value: any;
    width: number;
    render?: (params: {
        row?: any;
        Text?: React.ReactNode;
    }) => React.ReactElement;
}
declare type DataRow = Array<DataColumn>;
declare const ReportGrid: {
    ({ columns, data, summary, rowComponent, cellComponent, rowStyle, ...props }: {
        columns: {
            name: string;
            title: string;
            width?: number;
            render?: (params: {
                row?: any;
                Text?: React.ReactNode;
            }) => React.ReactElement;
        }[];
        data: Array<any>;
        /**
         * @description The summary key is one of the column names, and the value is a function that takes an array of data and returns a value
         */
        summary: {
            [key: string]: (params: {
                data: Array<any>;
            }) => any;
        };
        rowComponent?: (params: {
            index: number;
            key: string;
            row: any;
            datarow: DataRow;
        }) => React.ReactElement;
        cellComponent?: (params: {
            column: string;
            row: any;
        }) => React.ReactElement;
        rowStyle?: any;
    }): any;
    defaultProps: {
        columns: any[];
        summary: {};
        data: any[];
    };
};
export default ReportGrid;
