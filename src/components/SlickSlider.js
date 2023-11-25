import Slider from "react-slick"
import  "./slick.css"; 
import "./slick-theme.css";
import classes from "../pages/Project.module.css"




function ImageSlider(props){



    
    let project = props.project

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
        };
        return (
        
            <Slider  {...settings}>

                {project.images && project.images.map((image) =>{
                    return (
                        <div>
                            <img className = {classes.image} src = {require("../assets/images/"+image)} />
                        </div>
                    )})}

            </Slider>
        
        );
}

function TrinketSlider(props){



    
    let trinket = props.trinket

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
        };
        return (
        
            <Slider  {...settings}>

                {trinket.images && trinket.images.map((image) =>{
                    return (
                        <div>
                            <img className = {classes.image} src = {require("../assets/images/"+image)} />
                        </div>
                    )})}

            </Slider>
        
        );
}








    
export {ImageSlider, TrinketSlider}