import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Trinkets } from "./pages/Trinkets";
import { Contact } from "./pages/Contact";
import { Background } from "./components/Drawing";






function App (){


    return(
      
      <>
        <Background/>
        <TopBar/>
        <Home/>
        <About/>
        <Projects/>
        <Trinkets/>
        <Contact/>
      </>
     
    )
}

export {App}