import { ReactNode } from "react"

interface Children{
    children:ReactNode
}

export const Header = ({children}:Children) => {
    return (
    <div className="text-6xl font-bold text-blue-700">
    {children}
    </div>
    )
    } 