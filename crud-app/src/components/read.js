import React from 'react';

const Read = () => {
  return (
    <>
    <table class="table">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button className='btn-success'>Edit</button></td>
      <td><button className='btn-danger'>Delete</button></td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Read;