import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showData } from '../features/showSlice';

export const Create = () => {
    const dispatch = useDispatch();
    const [record, setRecord] = useState({ name : '', email : '' });
    const header = {"Access-Control-Allow-Origin" : "*"};
    const history = useNavigate();
    const storeData = useSelector((d) => d.show.record );
    const flag = (storeData.email === '' && storeData.name === '') ? true : false;
    
    useEffect(() => {
        getRecord();
    },[])

    const getRecord = () => {
        if(!flag){
            setRecord(storeData);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(flag){
            axios.post(
                "https://64ca3b93b2980cec85c3255e.mockapi.io/crud-api",
                {
                    name : record?.name,
                    email : record?.email,
                    header
                }
            ).then(() => {
                history('/read');
            })
        }
        if(!flag){
            const id = record?.id;
            axios.put(`https://64ca3b93b2980cec85c3255e.mockapi.io/crud-api/${id}`,
                {
                    name : record?.name,
                    email : record?.email
                }
            ).then(() => {
                const obj = {
                    id : '',
                    name : '',
                    email : ''
                  }
                history('/read');
                dispatch(showData(obj));
            })
        }
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-between mt-4'>
                <h2>
                {flag ? 'Create' : 'Update'} Record
                </h2>
                <Link to='/read'>
                <button className='btn btn-primary mt-2'>Check Records</button>
                </Link>
            </div>
            <form>
                <div className="mb-3 mt-2">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" 
                    value={record?.name}
                    onChange={(e) => {setRecord({...record, name : e.target.value})}} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"  
                    value={record?.email}
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
