declare const Document: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): any;
    defaultProps: {
        title: string;
        autho: string;
        Subject: string;
        creator: string;
        producer: string;
    };
};
export default Document;
