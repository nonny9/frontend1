import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function support() {
  return (
    <>
    <Head>
     <title>Film camera</title> <link rel="icon" href="/icon.png" type="image/icon"/> 
    </Head>

 
    
    <header data-bs-theme="dark">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container">
    <Link className="navbar-brand" Link href="/."> 
      <img src="iconnav1.png" alt="Bootstrap" width={50} height={50} />&nbsp;  
      Film camera
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" link href="/.">Index</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Product
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" Link href="filmcamera">Film camera</Link></li>
            <li><Link className="dropdown-item" Link href="film">Film </Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" Link href="lens">Lens</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" Link href="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" Link href="support">Support</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>&nbsp; &nbsp; &nbsp; &nbsp; 
      </form>
      
       
    </div>
    
  </div>
  <div>
  <button type="button" className="btn btn-outline-primary me-2">Login</button>
  <button type="button" className="btn btn-primary">Sign-up</button>&nbsp; &nbsp;   
   </div>
</nav>
</header>
<main>
<br></br><br></br>
<div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container">
    <section className="section mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7 text-center desc">
            <h2 className="h1 mb-3">How can we help?</h2>
            <p className="mx-lg-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            <form className="d-flex flex-column flex-md-row mt-4"><input type="email" className="form-control me-sm-2 mb-2 mb-sm-0" placeholder="you@yoursite.com" /> <button className="btn btn-primary flex-shrink-0" type="submit">Get Started</button></form>
          </div>
        </div>
      </div>
    </section>
    <section className="section pt-0">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body d-flex">
                <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-question-circle" /></div>
                <div className="ps-3 col">
                  <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Buying and Item Support</a></h5>
                  <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body d-flex">
                <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-id-badge" /></div>
                <div className="ps-3 col">
                  <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Licensing</a></h5>
                  <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body d-flex">
                <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-user" /></div>
                <div className="ps-3 col">
                  <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Your Account</a></h5>
                  <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body d-flex">
                <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-trophy" /></div>
                <div className="ps-3 col">
                  <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Copyright and Trademarks</a></h5>
                  <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body d-flex">
                <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-book" /></div>
                <div className="ps-3 col">
                  <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Tax &amp; Compliance</a></h5>
                  <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body d-flex">
                <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-check" /></div>
                <div className="ps-3 col">
                  <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Licensing</a></h5>
                  <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</main>

<footer>
  
<div>
  <div className="b-example-divider" />
  <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">  
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

</footer> 
</>
  )
}
