import type {FC, ReactNode, CSSProperties} from 'react'

interface PaneProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const Pane: FC<PaneProps> = ({ children, style, className }) => (
    <div className={`glider-slide ${className || ''}`} style={style}>
        {children}
    </div>
);

export default Pane;
