import * as React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { Layout } from "./pages/navigation/Layout"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import { TimeLine } from "./pages/timeline/TimeLine"
import { Publications } from "./pages/publications/Publications"
import { Projects } from "./pages/projects/Projects"
import { Contact } from "./pages/contact/Contact"

export const App = () => (
  <ChakraProvider theme={theme}>
        <Layout>
          <Home/>
          <About/>
          <TimeLine/>
          <Projects/>
          <Publications/>
          <Contact/>
        </Layout>
  </ChakraProvider>
)