import React from 'react';
import Block from './Block';
import Text from './Text';
interface DataColumn {
    key: string;
    value: any;
    width: number;
    render?: (params: {
        row?: any;
        Text?: React.ReactNode;
    }) => React.ReactElement;
}
declare type IDataRow = Array<DataColumn>;
declare const Grid: {
    ({ data, columns, getRowId, rowComponent, cellComponent, detailComponent, rowStyle }: {
        data: Array<any>;
        columns: {
            name: string;
            title: string;
            width?: number;
            render?: (params: {
                row?: any;
                Text?: React.ReactNode;
                Block?: React.ReactNode;
            }) => React.ReactElement;
        }[];
        getRowId?: (row: any, index: number) => string;
        /**
         *
         * @description key is the column name, I is the iteration (of column keys or names) that makes up a row
         */
        rowComponent?: (params: {
            index: number;
            key: string;
            row: any;
            datarow: IDataRow;
        }) => React.ReactElement;
        cellComponent?: (params: {
            column: string;
            row: any;
        }) => React.ReactElement;
        detailComponent?: (params: {
            row: any;
            Text?: React.ReactNode;
            Block?: React.ReactNode;
        }) => React.ReactElement;
        rowStyle?: any;
    }): any;
    defaultProps: {
        rowComponent: any;
        cellComponent: any;
        data: any[];
        columns: any[];
        getRowId: (row: any, index: any) => any;
    };
};
export default Grid;
