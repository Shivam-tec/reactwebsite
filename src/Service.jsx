import React from 'react'
import Card from './Card.jsx'
import v from "./Info"

const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className="row">
                    <div className='col-10 mx-auto'>
                    <div className='row gy-4'>

                        {v.map((val) => {
                            return (
                                <Card
                                    key={val.id}
                                    imgsrc={val.imgsrc}
                                    category={val.category}
                                    title={val.title}
                                    link={val.link} />

                            )
                        }
                        )
                        }
                    </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Service; 