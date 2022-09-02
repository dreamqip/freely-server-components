import type {FC, PropsWithChildren} from 'react';

const Main: FC<PropsWithChildren> = ({children}) => {
    return (
        <main className="min-h-0 flex-auto">
            {children}
        </main>
    );
};

export default Main;
