import { ReactNode } from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

export const Menu = ({ children }: { children: ReactNode }) => {

    const handleClick = (children: any) => {
        const section = document.querySelector(children)
        section.scrollIntoView({behavior: 'smooth', block: 'start'})
    }

    return (
        <Button
            onClick={()=>handleClick(`#${children}`)}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
            }}
        >
            {children}
        </Button>
    )
}