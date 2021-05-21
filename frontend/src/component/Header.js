import React from 'react'
import logo from '../logo.png'


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg top_menu">
                <div className="container-fluid">
                    <a classNameName="navbar-brand" href="#">
                        <img src={logo} alt="" className="logo_img" width="128" height="50" />
                    </a>

                    <div className="container wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                            <button type="submit" className="searchButton">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search ic"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="login_register">
                        <button className="btn btn-outline-success my-2 my-sm-0 me-2 upp_btn" type="submit">Register</button>
                        <button className="btn btn-outline-success my-2 my-sm-0 me-2 active upp_btn" type="submit">Login</button>
                    </div>
                    <div onclick="myFunction()" className="toggler" id="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-border-width toggler" viewBox="0 0 16 16">
                            <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </div>

            </nav>
            <nav className="navbar navbar-expand-lg bg-success menu" id="menuid">

                <div className="container-fluid ms-5 main_menu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active m-3">
                            <a className="nav-link menu_item" href="index.html">Home </a>
                        </li>

                        <li className="nav-item dropdown m-3">
                            <a className="nav-link dropdown-toggle menu_item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Market data
            </a>
                            <ul className="dropdown-menu dropp" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className=" dropdown-item menu_item" href="#">Government Annoucements</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Total Todays Trade</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Todays Rates of Different Goods</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Top Gainer</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Top Loser</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown m-3">
                            <a className="nav-link dropdown-toggle menu_item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                list
            </a>
                            <ul className="dropdown-menu dropp" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className=" dropdown-item menu_item" href="#">Action</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Another action</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown m-3">
                            <a className="nav-link dropdown-toggle menu_item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                trade
            </a>
                            <ul className="dropdown-menu dropp" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className=" dropdown-item menu_item" href="#">Action</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Another action</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown m-3">
                            <a className="nav-link dropdown-toggle menu_item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Rules
            </a>
                            <ul className="dropdown-menu dropp" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className=" dropdown-item menu_item" href="#">How to Buy Goods</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">How to sell Goods</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Rights of farmers</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">RIghts of consumer</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown m-3">
                            <a className="nav-link dropdown-toggle menu_item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
            </a>
                            <ul className="dropdown-menu dropp" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className=" dropdown-item menu_item" href="#">Daily Market Report</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Historical Report</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Govt. policy For farmers</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown m-3">
                            <a className="nav-link dropdown-toggle menu_item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                learn
            </a>
                            <ul className="dropdown-menu dropp" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className=" dropdown-item menu_item" href="#">How it work</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">How to Trade</a></li>
                                <li><a className=" dropdown-item menu_item" href="#">Cultivate New Things </a></li>
                            </ul>
                        </li>
                        <li className="nav-item  m-3">
                            <a className="nav-link menu_item" href="#">About</a>
                        </li>
                        <li className="nav-item  m-3">
                            <a className="nav-link  menu_item" id="contact" href="html/contact.html">Contacts</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}
