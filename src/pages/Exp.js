import {BackgroundCondensed} from "../components/Drawing"
import classes from "./Exp.module.css"
import {content} from "../assets/content/content"
import { ImageSlider } from "../components/SlickSlider"

const WorkData = content.work




function Title(){

    return(

    <div className = {classes.textContainer}>
        <div className={classes.supertext}>
            <h2>So I've Been Busy.</h2>
        </div>
        <span className = {classes.text}>
            <h2>Work</h2>
        </span>
        
    </div>
    )
}

function WorkContainer(){

    return(

        <div className={classes.container}>

        
                {WorkData && WorkData.map(item =>{

                    return(

                        <div className={classes.card}>

                            <div className={classes.itemTitle}>
                                <h4>{item.title}</h4>
                            </div>

                            <div >
                                <h4>{item.for}</h4>     
                            </div>

                            <div >
                                <h4>{item.scope}</h4>
                            </div>
                        </div>

                    )

                })}

            </div>
    )
   
}


function Exp(){

    return (

        <div className={classes.component}  id = "exp">
            <Title/>
            <WorkContainer/>
            <BackgroundCondensed/>
        </div>


    );
}


export {Exp}