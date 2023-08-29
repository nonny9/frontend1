import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function about() {
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
      N_IT
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" link href="/.">Index</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" link href="filmcamera">Product</Link>
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

<section className="section about-section gray-bg" id="about">
  <div className="container">
    <div className="row align-items-center flex-row-reverse">
      <div className="col-lg-6">
        <div className="about-text go-to">
          <h3 className="dark-color">About Me</h3>
          <h6 className="theme-color lead">เจ้าของเว็บไซต์ &amp; ช่างภาพกล้องฟิล์ม</h6>
          <p> Film camera นั้น <mark>เป็นร้านขายกล้องฟิล์ม กล้องเก่า กล้องมือสอง  อุปกรณ์ถ่ายภาพ และ ฟิล์มถ่ายรูป</mark> 
          โดยผู้ชำนาญการจริง ในเครือของร้านกล้องฟิล์มดีดี 
          </p>   
          <ul type="disc">
          ขายอะไรบ้าง? สินค้าของทางร้านมีหลากหลายดังนี้
                     <li>กล้องฟิล์ม กล้องสะสม กล้องมือสอง กล้องโบราณ กล้องฟิล์ม SLR กล้องฟิล์ม RF กล้องฟิล์ม TLR กล้องฟิล์มฟอร์แมต 4x5 กล้องฟิล์มโล่โม่ กล้องโพราลอยด์ </li>
                     <li>ฟิล์มถ่ายภาพ ฟิล์มสี ฟิล์มขาวดำ ฟิล์ม Negative ฟิล์มสไลด์ ฟิล์ม 135 ฟิล์ม 120 <br></br>ฟิล์มโพลารอยด์</li>
                     <li>เลนส์กล้องฟิล์ม เลนส์มือหมุน เลนส์วายด์ เลนส์เทเล สำหรับกล้องฟิล์มทุกรุ่น </li>
               </ul>
          
              </div>
            </div>
      <div className="col-lg-6">
        <div className="about-avatar">
          <img src="iconnav1.png" title alt />
        </div>
      </div>
    </div>
  </div>
</section>

</main>

<footer>
<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
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
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
</footer>
</div>
</footer>
    </>
  )
}