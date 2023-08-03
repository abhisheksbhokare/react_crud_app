import React, {useState, useEffect} from 'react';

const Update = () => {
    const [record, setRecord] = useState({});
    const getRecord = () => {
        setRecord(JSON.parse(localStorage.getItem('record')))
    }
    useEffect(() => {
        getRecord();
    },[])

  return (
        <div className='container'>
            <form>
                <div className="mb-3 mt-5">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" 
                    value={record.name}
                    //onChange={(e) => {setName(e.target.value)}} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" 
                    value={record.email} 
                    //onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <button type="submit" className="btn btn-primary" 
                //onClick={handleSubmit}
                >Submit</button>
            </form>
        </div>
  )
}

export default Update