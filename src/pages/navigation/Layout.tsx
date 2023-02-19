import { ReactNode } from "react"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"

const Links = ['About', 'Education', 'Skills', 'Projects', 'Publications', 'Contact'];

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation links={Links}/>
                {children}
            <Footer links={Links}/>
        </>
    )
}