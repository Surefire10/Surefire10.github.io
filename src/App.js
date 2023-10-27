import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
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
        <Contact/>
      </>
     
    )
}

export {App}