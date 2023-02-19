import * as React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { Layout } from "./pages/navigation/Layout"
import { About } from "./pages/about/About"
import { Education } from "./pages/education/Education"
import { Skills } from "./pages/skills/Skills"
import { Projects } from "./pages/projects/Projects"
import { Publications } from "./pages/publications/Publications"
import { Contact } from "./pages/contact/Contact"

export const App = () => (
  <ChakraProvider theme={theme}>
        <Layout>
          <About/>
          <Education/>
          <Skills/>
          <Projects/>
          <Publications/>
          <Contact/>
        </Layout>
  </ChakraProvider>
)