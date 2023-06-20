import React from 'react'

import { NavLink } from 'react-router-dom'

const Common = (porps) => {
    return (
        <>
            <section id="header" className='d-flex align-items-center'>
                <div className='container-fluid '>
                    <div className="row">
                        <div className='col-10 mx-auto'>
                            <div className="row">
                                <div className='col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>{porps.title}<strong className='brand-name'> TechTeam</strong> </h1>
                                    <h2 className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                    <div className='mt-3'></div>
                                    <NavLink to={porps.visit} className='btn btn-get-started'>{ porps.message}</NavLink>
                                </div>
                            
                            <div className="col-lg-6 order-lg-2 header-img">
                                <img src={porps.img} className=' header-img img-fluid animated' alt="imag-home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Common;