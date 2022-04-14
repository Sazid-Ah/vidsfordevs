import { Chip } from '@mui/material';
import React from 'react'

const QueryListing = () => {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };


     const date  = new Date().toLocaleDateString();

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


      <div className='container my-1'   style={{border:'1px solid gray'}}  >
        <div className='row'>
          <div className='col-md-6'>

            <div className="card" style={ {height:'50vh'} }>
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>

          </div>

          <div className='col-md-6'> 
            <div className="card ">
              <div className="card-body">
                
                <img  style={{height:'40px'}} className='img-fluid' src='https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png' ></img>
                     <span>Sazid Ahmad</span>
                    <div>{date}</div>
                 <div className='card-title'>What are the different data types present in javascript</div>
                 <h5>javascript</h5>
                 <button className='btn btn-primary float-end'>solve</button>
                 <Chip
                        label="Clickable Deletable"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                       <Chip label="Chip Filled" />
                       <Chip label="Chip Filled" />
              </div>
            </div>
            <div className="card my-5">
              <div className="card-body">
              <img  style={{height:'40px'}} className='img-fluid' src='https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png' ></img>
                     <span>Sazid Ahmad</span>
                    <div>{date}</div>
                 <div className='card-title'>What are the different data types present in javascript</div>
                 <h5>javascript</h5>
                 <button className='btn btn-primary  float-end'>solve</button>
                 <Chip
                        label="Clickable Deletable"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                       <Chip label="Chip Filled" />
                       <Chip label="Chip Filled" />
              </div>
            </div>
            <div className="card my-5">
              <div className="card-body">
              <img  style={{height:'40px'}} className='img-fluid' src='https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png' ></img>
                     <span>Sazid Ahmad</span>
                    <div>{date}</div>
                 <div className='card-title'>What are the different data types present in javascript</div>
                 <h5>javascript</h5>
                 <button className='btn btn-primary  float-end '>solve</button>
                 <Chip
                        label="Clickable Deletable"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                       <Chip label="Chip Filled" />
                       <Chip label="Chip Filled" />
              </div>
            </div>
            <div className="card my-5">
              <div className="card-body">
              <img  style={{height:'40px'}} className='img-fluid' src='https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png' ></img>
                     <span>Sazid Ahmad</span>
                    <div>{date}</div>
                 <div className='card-title'>What are the different data types present in javascript</div>
                 <h5>javascript</h5>
                 <button className='btn btn-primary  float-end' >solve</button>
                  <Chip
                        label="Clickable Deletable"
                        onClick={handleClick}
                        onDelete={handleDelete}
                  />
                   <Chip label="Chip Filled" />
                   <Chip label="Chip Filled" />
              </div>
            </div>

          </div>


        </div>


      </div>


    </div>
  )
}

export default QueryListing;