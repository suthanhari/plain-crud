import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Create() {

    const [values, setValues] = useState({});



    const handleChange = event => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value })

        )
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        setValues("")
        try {
            await axios.post("https://6278f6666ac99a9106601019.mockapi.io/user", values);

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <>

            <Link to='/list'>
                <button className='btn btn-lg btn-primary'>Userlist</button>
            </Link>

            <form onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">username</label>
                    <input type="text" className="form-control" id="username" name='username' value={values.username || ''} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="slug" className="form-label">slug</label>
                    <input type="text" className="form-control" id="slug" name='slug' value={values.slug || ''} onChange={handleChange} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="parent" className="form-label">parent</label>
                    <input type="text" className="form-control" id="parent" name='parent' value={values.parent || ''} onChange={handleChange} />

                </div>
                <div className="mb-3 ">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" className="form-control" id="description" name='description' value={values.description || ''} onChange={handleChange} />

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}

export default Create