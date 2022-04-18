import { Chip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import app_config from '../../config';

const QueryListing = () => {

  const [queryList, setQueryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;

  const fetchData = () => {
    fetch(url + '/query/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoading(false);
        setQueryList(data);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])



  const displayQueries = () => {
    if (!loading) {
      return queryList.map(({ title, createAt, dev }) => (
        <div className="card my-5">
          <div className="card-body">
            <img style={{ height: '40px' }} className='img-fluid' src='https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png' ></img>
            <span>{dev.username}</span>
            <div>{new Date(createAt).toLocaleDateString()}</div>
            <div className='card-title'>{title}</div>
            <button className='btn btn-primary  float-end'>Provide Solution</button>
            <Chip label="Chip Filled" />&nbsp;
            <Chip label="Chip Filled" />
          </div>
        </div>
      ))
    }
  }

  return (
    <div >

      <header className='header bg-dark' >

        <div className='container' style={{ padding: '5rem 0' }}>
          <div className='input-group'>
            <input className='form-control' placeholder='Search Tests Here' />
            <button className='btn btn-primary'>Search</button>
          </div>
        </div>

      </header>


      <div className='container my-1' style={{ border: '1px solid gray' }}  >
        <div className='row'>
          <div className='col-md-3'>

            <div className="card" style={{ height: '50vh' }}>
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>

          </div>

          <div className='col-md-9'>
            {displayQueries()}

          </div>


        </div>


      </div>


    </div>
  )
}

export default QueryListing;