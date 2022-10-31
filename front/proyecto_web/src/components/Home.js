import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {

  const {productos} = useSelector(state=>state.products)
  
  
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(getProducts());
  }, [dispatch])

  return (
    <Fragment>
      <MetaData title="La mejor Preprensa"></MetaData>

  <div className='container-fluid text-rigth'> 
  <h1 className='header-title' id="encabezado_productos">Nuestros Productos</h1>
  </div>
  <div className='container-fluid text-center'> 
  <h2 className='header'id="encabezado_productos">Impresoras 3D</h2>
  </div>
  <section id="productos" className='container mt-5'>
    <div className='row'>
       {/*item 1*/}
      {productos && productos.map(producto=>(
         <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
         <div className='card bg-light mb-3 rounded'>
         <div class="card-header"></div>
             <img className='card-img-top mx-auto' src={producto.image[0].url} alt={producto.image[0].public_id}></img>
             <div className='card-body d-flex flex-column'>
                 <h4 className='card-title'  id="Impresora_pri3"><a href='http://localhost:3000'>{producto.nombre}</a></h4>
                 <div className='rating mt-auto'>
                     <div className='rating-outer'>
                         <div className='rating-inner'>

                         </div>
                     </div>
                     <span id="No_opiniones" > 5 reviews</span>
                 </div>
                 <p className='card-text'>${producto.precio}</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
             </div>
         </div>
     </div>
      ))}

   </div>

  </section>



    </Fragment>
  )
}
export default Home