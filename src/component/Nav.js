import React from 'react'


const Nav = () => {
    return (
        <>

            <nav className="navbar navbar-expand-md ">
                <div className="container-fluid header">

                    <a className="navbar-brand" href="/Home">
                       <span className='ltab'> Vint-<span style={{color:'#FF9900'}}>age</span></span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav m-auto  mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link ctab " aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ctab" href="#Services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ctab" href='#Branches'>Branches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ctab" href='#About'>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ctab" href='#Contact'>Contact</a>
                            </li>                                                   
                        </ul>

                        <a className="nav-link rtab" href='#Tour'>Take Tour</a>

                    </div>
                    
                </div>
            </nav>


        </>
    )
}

export default Nav