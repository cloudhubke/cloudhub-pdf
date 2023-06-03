import React from 'react';
import Block from './Block';
import Text from './Text';
declare const SummaryRow: {
    ({ columns, data, summary, summaryRowComponent, style, ...props }: {
        [key: string]: any;
        data: Array<any>;
        columns: {
            name: string;
            title: string;
            width?: number;
            render?: (params: {
                row?: any;
                Text?: React.ReactNode;
            }) => React.ReactElement;
        }[];
        summary: {
            [key: string]: (params: {
                data?: Array<any>;
                Text?: any;
                Block?: any;
            }) => any;
        };
        summaryRowComponent?: (params: {
            data?: Array<any>;
            Text?: React.ReactNode;
            Block?: React.ReactNode;
        }) => any;
        style?: any;
    }): any;
    defaultProps: {
        columns: any[];
        summary: {};
    };
};
export default SummaryRow;
