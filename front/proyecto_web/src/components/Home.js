import React, { Fragment } from 'react'


export const Home = () => {
  return (
    <Fragment>
<div className="jumbotron text-center" id="titulo">
  <h1>Impresiones 3D</h1>
  <p>Ofrecemos impresiones 3D de alta calidad!</p>
</div>
<div className="container-fluid">
<div className="row">
<div className="col-sm-7">
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  </div>
  

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/impresion3d.jpg" alt="impresion3d"  ></img>
      <div class="carousel-caption">
        <h3>Cuentanos tu idea</h3>
        <p>En litografia Pulgarin lo hacemos realidad!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/impresion3d_2.jpg" alt="impresion3d_2"></img>
      <div class="carousel-caption">
        <h3>Medicina 3D</h3>
        <p>Diseño y fabricación de Medical Device</p>
      </div> 
    </div>
    <div class="carousel-item">
      <img src="./images/impresion3d_3.jpg" alt="impresion3d_3."></img>
      <div class="carousel-caption">
        <h3>Publicidad 3D</h3>
        <p>Diseño comercial y publicitarios</p>
      </div>  
    </div>
    <div class="carousel-item">
      <img src="./images/impresion3d_4.jpg" alt="impresion3d_4"  ></img>
      <div class="carousel-caption">
        <h3>Industrial 3D</h3>
        <p>Diseño industrial de vanguardia</p>
      </div>  
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
  </div>
</div>
<div class="col-md-5">
<div class="well">
      <p>La impresión 3D para el sector Salud supone un avance muy importante.
         Permite ” la obtención de formulaciones y productos ” 
         que pueden adaptarse mejor a las características y necesidades de los pacientes, 
         en la línea de los tratamientos basados en la medicina personalizada.</p>
    </div>
    <div class="well">
       <p>Gracias a nuestra tecnología profesional de gran tamaño podremos realizar impresión 3D 
        de gran formato para empresas alcanzando los 310 x 310 x 500 mm en una sola 
        pieza o incluso mayores tamaños con el uso de ensamblaje de varias piezas.</p>
    </div>
    <div class="well">
       <p>Para imprimir en 3D es necesario un archivo de la pieza en cuestión, 
        para ello puedes diseñarlo tu mismo y enviarlo a nuestro 
        servicio de impresión 3D o confiar en nuestro equipo de diseño y crearemos 
        la tuya personalizada de cero.</p>
    </div>
  
</div>
</div>
</div>
  <div className='container-fluid text-rigth'> 
  <h1 className='header-title' id="encabezado_productos">Nuestros Productos</h1>
  </div>
  <div className='container-fluid text-center'> 
  <h2 className='header'id="encabezado_productos">Impresoras 3D</h2>
  </div>
  <section id="productos" className='container mt-5'>
    <div className='row'>
        {/*item 1*/}
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/impresora_pri3.jpg' alt='impresora_pri3'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="Impresora pri3"><a href='http://localhost:3000'>Impresora Pri3</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'>$4.670.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>

         {/*item 2*/}
         <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/impresora_pri5.jpg' alt='impresora_pri5'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="Impresora pri5"><a href='http://localhost:3000'>Impresora Pri5</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'>$5.670.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>

         {/*item 3*/}
         <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/impresora_titan300.jpg' alt='impresora_titan300'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="Impresora titan300"><a href='http://localhost:3000'>Impresora Titan-300</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'>$11.670.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>

          {/*item 4*/}
          <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/impresora_titan500.jpg' alt='impresora_titan500'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="Impresora titan500"><a href='http://localhost:3000'>Impresora Titan-500</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'>$14.670.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>
        
        
    </div>

  </section>

{/* Seccion 2*/}
  <div className='container-fluid text-center text-secondary'> 
  <h2 className='header'id="encabezado_productos">Placas para impresión Litográfica</h2>
  </div>
  <section id="productos" className='container mt-5'>
    <div className='row'>
        {/*item 1*/}
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/placa.jpg' alt='placa'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="placa"><a href='http://localhost:3000'>Plancha CTP KTP-EX x 100 und</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'> $670.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>

         {/*item 2*/}
         <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/placa2.jpg' alt='placa2'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="placa2"><a href='http://localhost:3000'>Plancha CTP KLP-HD x 100 und</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'> $770.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>

         {/*item 3*/}
         <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/placa3.jpg' alt='placa3'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="placa3"><a href='http://localhost:3000'>Plancha CTP KTP-SR x 100 und</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'> $860.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>

          {/*item 4*/}
          <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card bg-light mb-3 rounded'>
            <div class="card-header"></div>
                <img className='card-img-top mx-auto' src='./images/placa4.jpg' alt='placa4'></img>
                <div className='card-body d-flex flex-column'>
                    <h4 className='card-title'  id="placa4"><a href='http://localhost:3000'>Plancha CTP KTP-PT x 100 und</a></h4>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'>

                            </div>
                        </div>
                        <span id="No_opiniones" > 5 reviews</span>
                    </div>
                    <p className='card-text'>$930.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-primary'>Ver detalle</a>
                </div>
            </div>
        </div>
       </div>
  </section>
  <div className='container-fluid text-center'> 
  <h2 className='header'id="encabezado_productos">Impresión Litográfica</h2>
  </div>
  <br></br>
 
    </Fragment>
  )
}
export default Home