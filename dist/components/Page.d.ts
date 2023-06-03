declare const Page: {
    ({ style, color, ...props }: {
        [key: string]: any;
        style?: any;
        color?: string;
    }): any;
    defaultProps: {
        size: string;
    };
};
export default Page;
