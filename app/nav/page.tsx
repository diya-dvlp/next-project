import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">MYYYYYSTORE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/productList">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">about</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}