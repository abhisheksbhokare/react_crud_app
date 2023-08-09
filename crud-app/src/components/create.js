import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [record, setRecord] = useState({ name : '', email : '' });
    const header = {"Access-Control-Allow-Origin" : "*"};
    const history = useNavigate();
    const flag = localStorage.getItem('record') === '[object Object]';
    const getRecord = () => {
        if(!flag){
            setRecord(JSON.parse(localStorage.getItem('record')));
        }
    }
    useEffect(() => {
        getRecord();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(flag){
            axios.post(
                "https://64ca3b93b2980cec85c3255e.mockapi.io/crud-api",
                {
                    name : record.name,
                    email : record.email,
                    header
                }
            ).then(() => {
                history('/read');
            })
        }
        if(!flag){
            const id = record.id;
            axios.put(`https://64ca3b93b2980cec85c3255e.mockapi.io/crud-api/${id}`,
                {
                    name : record.name,
                    email : record.email
                }
            ).then(() => {
                history('/read');
                localStorage.setItem('record',{})
            })
        }
    }
    return (
        <div className='container'>
            <form>
                <div className="mb-3 mt-5">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" 
                    value={record.name}
                    onChange={(e) => {setRecord({...record, name : e.target.value})}} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"  
                    value={record.email}
                    onChange={(e) => {setRecord({...record, email : e.target.value})}} 
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    {flag ? 'Submit' : 'Update'}
                </button>
            </form>
        </div>
    )
}
export default Create;
