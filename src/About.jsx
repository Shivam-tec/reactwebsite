import React from 'react'
import Common from './Common';
import log from './gears-686316_640.jpg'

const About = () => {
    return (
        <>
            <Common
                title="Welcome to"
                message="Contact"
                visit="/contact"
                img={log}
                
            />
        </>
    )
}  
export default About;