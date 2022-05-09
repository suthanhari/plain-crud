import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Editlist() {

    const [values, setValues] = useState({});

    const params = useParams()

    

    const handleChange = event => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.put(`https://6278f6666ac99a9106601019.mockapi.io/user/${params.id}`, values);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const fetch = async () => {
            try {
                let userData = await axios.get(`https://6278f6666ac99a9106601019.mockapi.io/user/${params.id}`);
                setValues(userData.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, [])







    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    {/* <Link to="/list">
                        <button className='btn btn-lg btn-primary'>Userlist</button>
                    </Link> */}

                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">username</label>
                            <input type="text" className="form-control" id="username" name='username' value={values.username} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="slug" className="form-label">slug</label>
                            <input type="text" className="form-control" id="slug" name='slug' value={values.slug} onChange={handleChange} />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="parent" className="form-label">parent</label>
                            <input type="text" className="form-control" id="parent" name='parent' value={values.parent} onChange={handleChange} />

                        </div>
                        <div class="mb-3 ">
                            <label htmlFor="description" className="form-label">description</label>
                            <input type="text" className="form-control" id="description" name='description' value={values.description} onChange={handleChange} />

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Editlist