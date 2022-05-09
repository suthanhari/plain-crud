import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Formlist() {

    const [user, setUser] = useState([]);

    const params = useParams()

    console.log(params.id);

    useEffect(() => {
        let fetchData = async () => {
            let reasponse = await axios.get("https://6278f6666ac99a9106601019.mockapi.io/user");
            setUser(reasponse.data)
        }
        fetchData()
    }, [])





    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Parent</th>
                                <th scope="col">Description</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((data, index) => {
                                    return <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{data.username}</td>
                                        <td>{data.slug}</td>
                                        <td>{data.parent}</td>
                                        <td>{data.description}</td>
                                        <td>
                                            <Link to={`/edit/${params.id}`}>
                                                <button className='btn btn-primary btn-sm'>Edit</button>
                                            </Link>
                                            <button className='btn btn-primary btn-sm'>Delete</button>

                                        </td>
                                    </tr>

                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Formlist