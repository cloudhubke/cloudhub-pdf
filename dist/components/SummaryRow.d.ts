import React from 'react';
import Text from './Text';
declare const SummaryRow: {
    ({ columns, data, summary, style, ...props }: {
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
                data: Array<any>;
            }) => any;
        };
        style?: any;
    }): any;
    defaultProps: {
        columns: any[];
        summary: {};
    };
};
export default SummaryRow;
