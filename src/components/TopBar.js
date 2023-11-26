import { useState } from "react"
import classes from "./TopBar.module.css"
import {Link} from "react-scroll"
import {FaBars ,FaTimes} from 'react-icons/fa';



function Icon(){

    return (

        <div className={classes.mainIcon}>
            <img className={classes.icon} src = {require("../assets/images/icon.png")} />
        </div>

    )


}


function Burger({isClicked, onClick}){

    return(

        <div onClick={onClick}>           
            <div className= {classes.burger}>
                {isClicked? 
                <div className={classes.close}><FaTimes/></div>:<div className={classes.burger}><FaBars/></div> }    
            </div>
        </div>

    )


}

function TopBar(){

    
    const [click,setClick] = useState(false)

    const handleOnClick = () => {

        setClick(current => !current)
        console.log(click)

    }
 
    return (

        <div className= {classes.component}>
            <nav className={classes.sticky}>
                <div className= {classes.container}>
                    <Icon/>
                    <ul className= {classes.topbar}>
                        <li className={classes.element}> 
                            <Link to="/" activeClass={classes.active}
                            spy={true}  //make link selected when you click on it 
                            smooth={true} 
                            duration={700}
                            offset={8}>
                                Home
                            </Link> 
                        </li> 

                        <li className={classes.element}> 
                            <Link to="about" activeClass={classes.active}
                            spy={true} 
                            smooth={true} 
                            duration={700}
                            offset={10}>
                                About
                            </Link> 
                        </li> 

                        <li className={classes.element}> 
                            <Link to="projects" activeClass={classes.active} 
                            spy={true} 
                            smooth={true} 
                            duration={700}
                            offset={0}>
                                Projects
                            </Link> 

                        </li> 


                        <li className={classes.element}> 
                            <Link to="contact" activeClass={classes.active} 
                            spy={true} 
                            smooth={true} 
                            duration={700}
                            offset={-400}>
                                Contact Me
                            </Link> 
                        </li>

                        
                        <Burger isClicked = {click} onClick = {handleOnClick}/>            
                    </ul>
                </div>
            </nav>
            {click? 

            <div className={classes.overlay} >
                <ul className= {classes.overlayList}>
                            <li className={classes.overlayElement}> 
                                <Link to="/" activeClass={classes.active}
                                spy={true}  //make link selected when you click on it 
                                smooth={true} 
                                duration={700}
                                offset={10}>
                                    Home
                                </Link> 
                            </li> 

                            <li className={classes.overlayElement}> 
                                <Link to="about" activeClass={classes.active}
                                spy={true} 
                                smooth={true} 
                                duration={700}
                                offset={-100}>
                                    About
                                </Link> 
                            </li> 

                            <li className={classes.overlayElement}> 
                                <Link to="projects" activeClass={classes.active} 
                                spy={true} 
                                smooth={true} 
                                duration={700}
                                offset={-80}>
                                    Projects
                                </Link> 

                            </li> 

                            <li className={classes.overlayElement}> 
                                <Link to="contact" activeClass={classes.active} 
                                spy={true} 
                                smooth={true} 
                                duration={700}
                                offset={-400}>
                                    Contact Me
                                </Link> 
                            </li>
                        </ul>
                 </div> 
            : null}
        </div>
       

    )


}



export{TopBar}