import React from 'react';
import Block from './Block';
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
declare type DataRow = Array<DataColumn>;
declare const ReportGrid: {
    ({ columns, data, summary, rowComponent, cellComponent, summaryRowComponent, detailComponent, rowStyle, rowProps, ...props }: {
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
            datarow?: DataRow;
            Text?: React.ReactNode;
            Block?: React.ReactNode;
        }) => React.ReactElement;
        cellComponent?: (params: {
            column: string;
            row: any;
        }) => React.ReactElement;
        summaryRowComponent?: (params: {
            data: Array<any>;
            Text?: React.ReactNode;
            Block?: React.ReactNode;
        }) => any;
        detailComponent?: (params: {
            row: any;
            Text?: React.ReactNode;
            Block?: React.ReactNode;
        }) => React.ReactElement;
        rowStyle?: any;
        rowProps?: any;
    }): any;
    defaultProps: {
        columns: any[];
        summary: {};
        data: any[];
    };
};
export default ReportGrid;
