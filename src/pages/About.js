import classes from "./About.module.css"



function About(){

    return(

        <div className={classes.component}>
            <div className={classes.container} id = "about">
                <div className={classes.textContainer}>
                    <div className={classes.title}>
                        <h2>Get To Know Me!</h2>
                    </div>
                
                    <div className={classes.me}>
                        <p>
                            At 14, I decided to try my hand at coding for the first time and ever since then, 
                            I just knew that's what I was going to do with my life. 
                        </p>
                        <p>
                        Fast-forward through 4 more years of school and I decided that 
                            the only way for me was to pursue my bachelor's of Computer Science. 
                            Today, I have the privilege of being in the field that 
                            I've always dreamed of, working with amazing clients on exciting projects.
                        </p>
                        <p>
                            When I’m not at some computer, 
                            I’m usually listening to music, hanging out with my family, 
                            or running around Tamriel picking Mountain Flowers.
                        </p>
                    </div>
                </div>
                <div className={classes.skillContainer}>
                    <div className={classes.skillTitle}>
                        <h2>Here's What I Know:</h2>
                    </div>
                    <div className={classes.skills}>
                        
                        <div><h2>Java</h2></div>
                        <div><h2>JavaScript</h2></div>
                        <div><h2>React</h2></div>
                        <div><h2>SpringBoot</h2></div>
                        <div><h2>SQL</h2></div>
                        <div><h2>HTML</h2></div>
                        <div><h2>CSS</h2></div>
                        <div><h2>TypeScript</h2></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export{About}