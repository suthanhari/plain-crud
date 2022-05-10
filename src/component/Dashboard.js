import React from 'react'
import Create from './Create'
import Formlist from './Formlist'


function Dashboard() {


    

    return (
        <>
            <div className='row d-flex justify-content-center mt-2'>
                <div className='col-md-4'>
                    <Create />
                </div>
                <div className='col-md-8'>
                    <Formlist />
                </div>
            </div>
        </>
    )
}

export default Dashboard