
import classes from "./Home.module.css"
import {Link} from "react-scroll"
import {LinkedLogo,GitLogo,EmailLogo} from "../components/Icon"





function Greeting (){


    return(

        <div className={classes.container}>
            <div className={classes.greeting}>
                <h2><span className={classes.colorful}>Hi,</span> I'm Yara </h2>
            </div> 
            <div className={classes.subtitle}>
                <h3>I build stuff, mainly for the internet.</h3> 
            </div>   
            <div className={classes.content}>
                <h2>A Web-focused Software Developer, Huge Fan of Problem-solving and a Learning Enthusiast.</h2> 
            </div> 
            <div className={classes.buttonContainer}>
                <Link className={classes.button} to="projects"  
                    spy={true} 
                    smooth={true} 
                    duration={1000}
                    offset={-150}>
                        Check Out What I Made!
                </Link> 
            </div>  
            <div className={classes.arrowContainer}>
                <div className={classes.arrow}/>
                
            </div>
            
        </div> 
    )


}

function SideSocials(){


    return(
 
         <div className={classes.sideSocials}>
             <ul>
                 <li><LinkedLogo className={classes.icon} hoverOnColor = {"brown"} hoverOffColor = {"black"}/></li>
                 <li> <GitLogo className={classes.icon} hoverOnColor = {"brown"} hoverOffColor = {"black"}/></li>
                 <li> <EmailLogo className={classes.icon} hoverOnColor = {"brown"} hoverOffColor = {"black"}/></li>

             </ul>
 
         </div>
    )
 
 }
 



function Home(){

    return (

        <div className={classes.component} id = "/">
            <SideSocials/>
            <Greeting />
        </div>              


    );
}


export  {Home}