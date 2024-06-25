import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showData } from '../features/showSlice';

const Read = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getData = () => {
    axios.get("https://64ca3b93b2980cec85c3255e.mockapi.io/crud-api")
      .then((res) => {
        setData(res.data);
      })
  }
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://64ca3b93b2980cec85c3255e.mockapi.io/crud-api/${id}`)
    .then(() => {
      getData();
    })
  }

  const handleUpdate = (el) => {
    const obj = {
      id : el.id,
      name : el.name,
      email : el.email
    }
    dispatch(showData(obj));
  }

  const handleCreate = () => {
    let obj2 = {
      id : '',
      name : '',
      email : ''
    }
    dispatch(showData(obj2));
  }

  return (
    <>
      <div className='container'>
      <div className='d-flex justify-content-between mt-4 mb-4'>
                <h2>
                    Records
                </h2>
                <Link to='/'>
                <button onClick={handleCreate} className='btn btn-primary mt-2'>Create Records</button>
                </Link>
            </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr>
                  <th scope="row">{el.id}</th>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>
                    <Link to="/">
                      <button onClick={() => {handleUpdate(el)}} className='btn-success'>Edit</button>
                    </Link>
                  </td>
                  <td><button className='btn-danger' onClick={() => {handleDelete(el.id)}}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Read;