import React from 'react'
import Facebook from '@mui/icons-material/Facebook';
import { GitHub, Google, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div>


     
      <footer class="bg-dark text-center text-white">
        
        
        <div class="container p-4">
          
          <section class="mb-4">
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Facebook></Facebook>
          </a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
          <Twitter></Twitter>
        </a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
          <Google></Google>
        </a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
          <Instagram></Instagram>
        </a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
          <LinkedIn></LinkedIn>
        </a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
          <GitHub></GitHub>
        </a>
           
          </section>
         
          <section class="">
            <form action="">
              
              <div class="row d-flex justify-content-center">
                
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
               
                <div class="col-md-5 col-12">
                 
                  <div class="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" placeholder='Enter Email Address' class="form-control" />
                    <label class="form-label" for="form5Example21">Email address</label>
                  </div>
                </div>
            
                <div class="col-auto">
           
                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
                
              </div>
             
            </form>
          </section>
         
          <section class="mb-4">
            <p>
            Our public platform serves 100 million people every month, making it one of the most popular websites in the world.

Our asynchronous knowledge management and collaboration offering, Stack Overflow for Teams, is transforming how people work.
            </p>
          </section>
         
          <section class="">
           
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Vids for devs</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">About-us</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Product</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column-->

        <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">User</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              
            </div>
           
          </section>
          
        </div>
        
       </footer>
      
    </div>
  )
}

export default Footer;