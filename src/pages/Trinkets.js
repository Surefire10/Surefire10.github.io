import {BackgroundCondensed} from "../components/Drawing"
import classes from "./Trinket.module.css"
import {content} from "../assets/content/content"
import {TrinketSlider} from "../components/SlickSlider"


const TrinketContent = content.trinkets


function Card(){

    return(

        <div className = {classes.card} id = "trinkets">
            <div className = {classes.textContainer}>
                <h4 className={classes.supertext}>Little experiements and</h4>
                <h2>Trinkets</h2>
                <p className={classes.content}>
                    Other smaller tools.
                </p>
            </div>
        </div>

    )
}




    



function TrinketContainer(){



    return(


             
        <div className={classes.trinketContainer}>

                {TrinketContent && TrinketContent.map((trinket,index) =>{

                    return(
                        
                        <div className={classes.trinket} id="container">

                            <div className={classes.sliderContainer}>
                                <TrinketSlider trinket = {trinket}/>
                            </div>

                            <div className ={classes.infoContainer}>
                               
                                <div className={classes.title}>
                                    <h2>{trinket.title}</h2>
                                </div>

                                <div className={classes.scope}>
                                    <h2>{trinket.scope}</h2>
                                </div>

                                <div className= {classes.description}>
                                    <p>
                                        {trinket.description}
                                        <a href={trinket.link}> Find it on Github.</a>
                                    </p>
                                </div>

                    
                                <div className = {classes.skillsContainer} key={trinket.skills}>
                                    {trinket.skills.map((skill) =>{
                                        
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


function Trinkets(){

    return (

        <div className={classes.component}>
            <Card/>
            <TrinketContainer/>
            <BackgroundCondensed/>
        </div>


    );
}


export {Trinkets}