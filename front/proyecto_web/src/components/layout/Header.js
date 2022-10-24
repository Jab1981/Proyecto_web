import React, {Fragment} from 'react'
import "../../App.css"

const Header = () => {

    return (
        <Fragment>



<nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
<div className='col-12 col-md-7'>
  <div className='navbar-brand'>Navbar</div>
  </div>

  <div className='navbar-form navbar-left'>
  <div className="form-group" action="/action_page.php">
    <input class="form-control mr-sm-4" type="text" placeholder="Que producto busca?"></input>
    <button class="btn btn-success" type="submit">Buscar</button>
  </div>
  </div>
  
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
  <div href="#" class="btn btn-info btn-md">
          <span class="glyphicon glyphicon-user"></span> Sesion
        </div>
        
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span className="ml-3" id="cart_count"> 2</span>  
                    
                    
  
    
 
   
</nav>




        </Fragment>
    )

    }

export default Header