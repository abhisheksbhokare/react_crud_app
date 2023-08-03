import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const header = {"Access-Control-Allow-Origin" : "*"};

    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            "https://64ca3b93b2980cec85c3255e.mockapi.io/crud-api",
            {
                name : name,
                email : email,
                header
            }
        ).then(() => {
            history('/read');
        }) 
    }
    return (
        <div className='container'>
            <form>
                <div className="mb-3 mt-5">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"  onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Create;
