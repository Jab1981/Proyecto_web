import React, {Fragment} from 'react'
import "../../App.css"

const Header = () => {

    return (
        <Fragment>
<nav className='navbar navbar-expand-sm'>
 <div className='col-md-4 mt-4 mt-md-2'>
  <div className='navbar-nav'>
    <img src="./images/Litografia.png" alt="logo" border-radius={20}  ></img>
  </div>
  </div>
  <div className='col-sm-6 mt-2 mt-md-0'>
  <div className='navbar-form'>
  <div className="form-group"  action="/action_page.php">
    <input class="form-control mr-sm-2" type="text" placeholder="Que producto busca?"></input>
    <button class="btn btn-success" type="submit">Buscar</button>
  </div>
  </div>
  </div>
  
  <div className='col-sm-1 mt-2 mt-md-0'>
  <div href="#" class="btn btn-info btn-md">
          <span class="glyphicon glyphicon-user"></span> Sesion
        </div>
        </div>  
             
        <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span className="ml-3" id="cart_count"> 2</span>  
                                
                   
                
                    
  
    
 
   
</nav>




        </Fragment>
    )

    }

export default Header