declare const Page: {
    ({ style, color, ...props }: {
        [x: string]: any;
        style: any;
        color: any;
    }): any;
    defaultProps: {
        size: string;
    };
};
export default Page;
