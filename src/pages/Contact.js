
import classes from "./Contact.module.css"
import {GitLogo,LinkedLogo,EmailLogo} from "../components/Icon"
import { BackgroundCondensed } from "../components/Drawing"




function Contact(){

    return(
        <div className={classes.component} id = "contact">
                <div className={classes.upperContainer}>
                    <div className={classes.textContainer}>
                        <h1>Let's Talk? Find Me On My Socials. Or,&nbsp;
                            <a href="mailto:yarakhairat10@gmail.com">
                            Send Me an Email. 
                            </a>
                        </h1>
                    </div>
                    
                    <div className={classes.socialContainer}>
                        <ul>
                            <li><GitLogo className={classes.icons} hoverOnColor= {"brown"} hoverOffColor = {"black"}/></li>
                            <li><LinkedLogo className={classes.icons} hoverOnColor= {"brown"} hoverOffColor = {"black"} /></li>
                            <li><EmailLogo className={classes.icons} hoverOnColor= {"brown"} hoverOffColor = {"black"} /></li>
                        </ul>
                    </div>
                </div>

                <div className={classes.lowerContainer}>
                    <h4>Yara Khairat</h4>
                    <p>A Web-focused Software Developer, Huge Fan of Problem-solving and a Learning Enthusiast.</p>               
                    <hr/>
                    <div className={classes.smallContainer}>
                        <h2>©Copyright 2023. Made By Yours Truly.</h2>
                    </div>
                </div>
        </div>
    )
}




export{Contact}