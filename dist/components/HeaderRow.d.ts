import React from 'react';
import Text from './Text';
declare const HeaderRow: {
    ({ columns, style }: {
        columns: {
            name: string;
            title: string;
            width?: number;
            render?: (params: {
                row?: any;
                Text?: React.ReactNode;
            }) => React.ReactElement;
        }[];
        style?: any;
    }): any;
    defaultProps: {
        columns: any[];
    };
};
export default HeaderRow;
