import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="landing navContainer navbar navbar-expand-md ">
                <div className='container-fluid'>
                    <a className="navbar-brand" href="/">Jumbo</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarID">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Carta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Reservas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Eventos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
