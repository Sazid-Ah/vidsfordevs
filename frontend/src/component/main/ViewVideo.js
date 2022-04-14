import { AddComment, ThumbDownOffAlt, ThumbUpAlt } from '@mui/icons-material';
import { CardMedia } from '@mui/material';
import React from 'react'



const ViewVideo = () => {
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-md col-sm col-xl'>
          <div className='header mx-5'>
            <h1>
              this is view video page
            </h1>

          </div>

        </div>

      </div>
      <div className='row' style={{ border: '1px solid black' }}>
        <div className='col-md-8 col-sm-4'>
          <div className='card my-5 '>
              <img class="card-img-top" src='https://st.depositphotos.com/1003924/2502/i/600/depositphotos_25021863-stock-photo-html-web-code.jpg'></img>
            <div className='card-body'>


            <div className='card-title'>
              Documentation and examples for opting images into responsive behavior
                

              </div>

              
              <div className='mt-3' >
             
                <div className='text-center'>
                <h4>2,116,048 viewsApr 28, 2021</h4>
                <ThumbUpAlt></ThumbUpAlt>
                <ThumbDownOffAlt className='mx-3' ></ThumbDownOffAlt>
                <AddComment></AddComment>
                </div>
              </div>

              <button className='btn btn-primary  mx-5  float-end '>Follow</button>
            </div>

          </div>

        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>

              fkjdvnbjidf

            </div>

          </div>

        </div>

      </div>




    </div>
  )
}

export default ViewVideo;