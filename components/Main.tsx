import type {FC, ReactNode} from 'react';
import {Content} from "../layouts/MainLayout";

interface Props {
    children: ReactNode;
}

const Main: FC<Props> = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    );
};

export default Main;
