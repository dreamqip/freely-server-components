import type {FC, PropsWithChildren} from 'react';
import {Content} from "@/layouts/MainLayout";

const Main: FC<PropsWithChildren> = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    );
};

export default Main;
