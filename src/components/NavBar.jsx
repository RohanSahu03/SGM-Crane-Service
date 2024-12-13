import React from 'react'
import '../css/navbar.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  return (
    <div
            className="headers"
        
        >
            {["xl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                
                    className='header'
                >
                    <Container fluid style={{ padding: "5px 20px"}}>
                        <div className="d-flex gap-2" >
                            <a href="/" className="tail-text" style={{color:"black", height:"75px"}}>
                                <img src="../images/logo.png" alt="Logo" className='logo'/>
                                <p className='logoText'>Crane Services</p>
                            </a>
                          
                        </div>
                        <Navbar.Toggle
                            // aria-controls={offcanvasNavbar-expand-${expand}}
                        />
                        <Navbar.Offcanvas
                            // id={offcanvasNavbar-expand-${expand}}
                            // aria-labelledby={offcanvasNavbarLabel-expand-${expand}}
                            placement="end"
                           
                        >
                            <Offcanvas.Header closeButton className='closeBtn'></Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav
                                    className="justify-content-end flex-grow-1 pe-3"
                        
                                >
                                     <Nav.Link href="/" className="tail-text" style={{color:'Black',marginRight:'40px',fontSize:'16px'}} >
                                       HOME
                                    </Nav.Link>
                                    <Nav.Link href="/aboutus" className="tail-text" style={{color:'Black',marginRight:'40px',fontSize:'16px'}}>
                                        ABOUT US
                                    </Nav.Link>
                                    <Nav.Link href="/service" className="tail-text" style={{color:'Black',marginRight:'40px',fontSize:'16px'}}>
                                       SERVICE
                                    </Nav.Link>
                                 
                                    <Nav.Link href="/contactus" className="tail-text" style={{color:'Black',marginRight:'40px',fontSize:'16px'}}>
                                        CONTACT US
                                    </Nav.Link>
                                   
                               
                                </Nav>


                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
  )
}

export default NavBar