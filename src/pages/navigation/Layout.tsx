import { ReactNode } from "react"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"

const Links = ['Home', 'About', 'TimeLine', 'Projects', 'Publications'];

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation links={Links}/>
                {children}
            <Footer links={Links}/>
        </>
    )
}