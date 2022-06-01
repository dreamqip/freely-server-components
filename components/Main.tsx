import type {FC} from 'react';
import {Content} from "../layouts/MainLayout";

const Main: FC = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    );
};

export default Main;
