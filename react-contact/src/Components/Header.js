import React from 'react'

const Header = ({ contacts, id  }) => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark m-auto p-2 fixed sticky-top">
                <div className="container-fluid">
                    <a href="http://localhost:3000/" className="navbar-brand fw-bold fs-2">CONTACT DIRECTORY</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search for Contacts" aria-label="Search" />
                        <button className="btn btn-outline-success">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header
