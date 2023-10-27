import classes from "./Icon.module.css"
import { useState } from "react"
import { Tooltip } from "react-tooltip"
import copy from 'copy-to-clipboard';




function GitLogo(props){

    let hoverOnColor = props.hoverOnColor
    let hoverOffColor = props.hoverOffColor

    const [hover, setHover] = useState(false)

    const handleOnMouseEnter = () =>{

        setHover(current => !current)
    }

    const handleOnMouseLeave = () =>{

        setHover(current => !current)
    }

    const handleMouseClick = () =>{

        window.open("https://github.com/Surefire10")
    }

    const handleTouch = () =>{

        window.open("https://github.com/Surefire10")
    }


    return (
        <svg className={props.className}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleMouseClick} 
            viewBox="0 0 50 50" width="50" height="50">    
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,
            38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6
            ,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,
            33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,
            0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 
            c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 
            c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 
            c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2
            ,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002
            ,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,
            0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,
            30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,
            35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" 
            fill = {hover? hoverOnColor : hoverOffColor}/>
    </svg>
    )
}



function LinkedLogo(props){

    let hoverOnColor = props.hoverOnColor
    let hoverOffColor = props.hoverOffColor

    const [hover, setHover] = useState(false)

    const handleOnMouseEnter = () =>{

        setHover(current => !current)
    }

    const handleOnMouseLeave = () =>{

        setHover(current => !current)
    }

    const handleMouseClick = () =>{


        window.open("https://www.linkedin.com/in/yara-khairat-662583248")
    }


    return (
        <svg className={props.className}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleMouseClick} 
            viewBox="0 0 50 50" width="50" height="50">    
           <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 
           L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 
           39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 
           L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 
           L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 
           0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 
           L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 
           20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 
           34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 
           34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 
           32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"
           fill = {hover? hoverOnColor : hoverOffColor}/>
        </svg>
    )
}


function EmailLogo(props){

    let hoverOnColor = props.hoverOnColor
    let hoverOffColor = props.hoverOffColor


    const [hover, setHover] = useState(false)
    const [clicked, setClick] = useState(false)

    const handleOnMouseEnter = () =>{

        setHover(current => !current)
    }

    const handleOnMouseLeave = () =>{

        setHover(current => !current)
        setClick(false)
    }

    const handleMouseClick = () =>{

        let text = "yarakhairat10@gmail.com"
        copy(text)
        setClick(current => !current)
    }

    let tooltipHover = "Click To Copy Email" 
    let tooltipClick = "Email Copied to Clipboard"   
   


    return (
        <div>
            <Tooltip className={classes.tooltip} id="copy-tooltip"/>
            <svg className={props.className} data-tooltip-id="copy-tooltip" data-tooltip-content={clicked? tooltipClick : tooltipHover}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleMouseClick} 
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">

                <path fill = {hover? hoverOnColor : hoverOffColor} d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                <path fill = {hover? hoverOnColor : hoverOffColor} d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                <polygon fill = {hover? hoverOnColor : hoverOffColor} points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                <path fill = {hover? hoverOnColor : hoverOffColor} d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,
                3,12.298z"></path>
                <path fill = {hover? hoverOnColor : hoverOffColor} d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,
                45,9.924,45,12.298z"></path>
            </svg>
           
  
        </div>
    )
}

export{LinkedLogo, GitLogo, EmailLogo}