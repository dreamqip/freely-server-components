import type {FC, PropsWithChildren} from 'react'
import MainHeader from "@/components/Header";
import Main from "@/components/Main";
import MainFooter from "@/components/Footer";
import {ThemeProvider} from "next-themes";

interface MainLayoutProps {
    theme?: string;
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({children, theme}) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class" forcedTheme={theme || undefined}>
            <div className="max-w-7xl px-2 md:px-4 mx-auto bg-inherit min-h-full flex-auto flex flex-col">
                <MainHeader/>
                <Main>
                    {children}
                </Main>
                <MainFooter/>
            </div>
        </ThemeProvider>
    );
};

export default MainLayout;
