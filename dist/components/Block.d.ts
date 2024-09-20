export interface BlockProps {
    name?: boolean;
    absolute?: boolean;
    flex?: boolean;
    row?: boolean;
    column?: boolean;
    wrap?: boolean;
    center?: boolean;
    middle?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    margin?: number | boolean;
    padding?: number | boolean;
    elevation?: number;
    color?: string;
    space?: number;
    style?: any;
    animated?: boolean;
    paper?: boolean;
    visible?: boolean;
    opacity?: number;
}
declare const Block: (props: BlockProps) => any;
export default Block;
