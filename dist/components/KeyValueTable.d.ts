import React from 'react';
import { BlockProps } from './Block';
declare const KeyValueTable: ({ data, showCounter, opacity, small, keyContainerStyles, valueContainerStyles, ...props }: BlockProps & {
    data: {
        [key: string]: any;
    };
    small?: boolean;
    showCounter?: boolean;
    keyContainerStyles?: any;
    valueContainerStyles?: any;
}) => any;
export default KeyValueTable;
