import type {FC, PropsWithChildren} from 'react'
import MainHeader from "@/components/Header";
import Main from "@/components/Main";
import MainFooter from "@/components/Footer";

const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="max-w-7xl px-2 md:px-4 mx-auto bg-inherit min-h-full flex-auto flex flex-col">
            <MainHeader/>
            <Main>
                {children}
            </Main>
            <MainFooter/>
        </div>
    );
};

export default MainLayout;
