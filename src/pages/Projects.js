import {BackgroundCondensed} from "../components/Drawing"
import classes from "./Project.module.css"
import {content} from "../assets/content/content"
import {ImageSlider} from "../components/SlickSlider"


const ProjectData = content.projects


function Card(){

    return(

        <div className = {classes.card} id = "projects">
            <div className = {classes.textContainer}>
                <h4 className={classes.supertext}>Take a Look at My Handy Work.</h4>
                <h2>Projects</h2>
                <p className={classes.content}>
                    Here's some of the projects that I've worked on lately. 
                    Some are for clients, some others are personal but
                    regardless, each one has been a pleasure to work on :)
                </p>
            </div>
        </div>

    )
}




    



function ProjectContainer(){



    return(


             
        <div className={classes.projectContainer}>

                {ProjectData && ProjectData.map((project,index) =>{

                    return(
                        
                        <div className={classes.project} id="container">

                            <div className={classes.sliderContainer}>
                                <ImageSlider project = {project}/>
                            </div>

                            <div className ={classes.infoContainer}>
                               
                                <div className={classes.title}>
                                    <h2>{project.title}</h2>
                                </div>

                                <div className={classes.scope}>
                                    <h2>{project.scope}</h2>
                                </div>

                                <div className= {classes.description}>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>

                    
                                <div className = {classes.skillsContainer} key={project.skills}>
                                    {project.skills.map((skill) =>{
                                        
                                        return(
                                            <div className = {classes.skillItem} key={skill}>
                                                <h2>{skill}</h2>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                    </div>
                    )

                })}
           
           </div> 


    )
}


function Projects(){

    return (

        <div className={classes.component}>
            <Card/>
            <ProjectContainer/>
            <BackgroundCondensed/>
        </div>


    );
}


export {Projects}