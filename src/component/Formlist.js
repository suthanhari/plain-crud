import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Formlist() {

    const [user, setUser] = useState([]);
    const WAIT_TIME = 1000;




    useEffect(() => {

        let ids = setInterval(() => {

            let fetchData = async () => {
                try {
                    let reasponse = await axios.get("https://6278f6666ac99a9106601019.mockapi.io/user");
                    setUser(reasponse.data)
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData()
        }, WAIT_TIME)
        return () => clearInterval(ids)


    }, [])



    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://6278f6666ac99a9106601019.mockapi.io/user/${id}`);

        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>

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
                                    <Link to={`/edit/${data.id}`}>
                                        <button className='btn btn-primary btn-sm me-2'>Edit</button>
                                    </Link>

                                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>


                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    Are You Sure Want to Delete?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                    <button type="button" onClick={() => handleDelete(data.id)} className='btn btn-primary' data-bs-dismiss="modal">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        })

                    }

                </tbody>
            </table>

        </>
    )
}

export default Formlist