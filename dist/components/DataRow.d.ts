import React from 'react';
import Block from './Block';
import Text from './Text';
declare const DataRow: {
    ({ row, datarow, cellComponent, style, ...props }: {
        key?: string;
        row?: any;
        datarow?: {
            key: string;
            value: any;
            width?: number;
            render?: (params: {
                row?: any;
                Text?: React.ReactNode;
                Block?: React.ReactNode;
            }) => React.ReactElement;
        }[];
        cellComponent?: (params: {
            column: string;
            row: any;
            render?: (params: {
                row?: any;
                Text?: React.ReactNode;
                Block?: React.ReactNode;
            }) => React.ReactElement;
        }) => React.ReactElement;
        style?: any;
    }): any;
    defaultProps: {
        row: any[];
    };
};
export default DataRow;
