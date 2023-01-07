import { FC, PropsWithChildren } from "react"

const ShadedBackground: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="shaded-background">
            {children}
        </div>
    )
}

export default ShadedBackground