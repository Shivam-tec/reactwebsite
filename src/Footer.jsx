import React from 'react';

const Footer = () => {

    let year = new Date().getFullYear();
    return (
        <>
            <footer className='footer'>
                <p>  &copy; {year} TechTeam. All rights reseverd |Terms and Conditions</p>
            </footer>
        </>
    )
}

export default Footer;