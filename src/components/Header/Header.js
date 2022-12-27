import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavLink } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import './Header.css';
import Usefirebase from '../../Hook/Usefirebase';
import { Box } from '@mui/system';


const Header = () => {
    // const { user, logout } = Usefirebase();
    const { user, admin, logout } = useAuth();
    // console.log(admin);
    return (
        <div className="header">
            <Navbar sticky='top' bg="light" variant="light" collapseOnSelect expand="lg" className="me-auto ">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className='text-dark fs-4 fst-italic fc-text-primary pb-3'><span style={{ color: 'blue' }}>E-commerce Store</span></Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <NavLink as={Link} to="/home#home" className='text-dark'>Home</NavLink>
                            <NavLink as={Link} to="/home#services" className='text-dark'>Products</NavLink>
                            {user?.email ?
                                <Link to="/explore">More Products</Link>
                                :
                                <NavLink as={Link} to=""></NavLink>
                            }

                            {/* <NavLink as={Link} to="/warranty">Warranty</NavLink> */}
                            {/* <Link to="/">Home</Link> */}
                            {/* <Link to="/dashboard/myorders">My Orders</Link> */}

                            {admin && <Link to="/dashboard/makeAdmin">Make Admin</Link>}
                            {admin && <Link to="/orders/update/:id">Manage All Orders</Link>}


                            {user?.email && !admin ?

                                <Link to="/dashboard">Dashboard</Link>

                                :
                                <NavLink as={Link} to=""></NavLink>
                            }
                            {user?.email && admin ?
                                <Link to="/addservice">Add a Product</Link>
                                :
                                <NavLink as={Link} to=""></NavLink>
                            }
                            {user?.email && admin ?
                                <Link to="/manageproduct">Manage Products</Link>
                                :
                                <NavLink as={Link} to=""></NavLink>
                            }

                            {user?.email ?
                                <NavLink> <button onClick={logout} variant="light" className='btn btn-light tex-black text-decoration-none mb-1 pb-5 '>Logout</button></NavLink> :
                                <NavLink as={Link} to="/loggedin" variant="light" className='btn btn-light tex-black text-decoration-none mt-0 pt-0 margin-left-20 px'>Login</NavLink>

                            }
                        </Nav>
                        <Navbar.Text className='strong'>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    {/* <div>
                        <label for="my-drawer-2" class="btn btn-light text-black text-decoration-none mt-0 pt-0 margin-left-100px lg:hidden">Open drawer</label>
                    </div> */}
                    {!admin ?
                        <label for="my-drawer-2" class="btn btn-light text-black text-decoration-none mt-0 pt-0 margin-left-100px lg:hidden">Drawer</label> : null}
                </Container>

            </Navbar>


        </div >
    );
};

export default Header;