import { FC, PropsWithChildren } from "react";

const Main: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="main">
            {children}
        </main>
    )
}

export default Main