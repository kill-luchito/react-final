import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import Footer from './footer.jsx'


function Page({ children }) {
    const location = useLocation();




    const navbarStyle = {
        backgroundColor: '#1e1e2f',
        boxShadow: '0 2px 10px rgba(199, 25, 25, 0.64)',

    };


    const brandStyle = {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        letterSpacing: '1px',
        textDecoration: 'none'

    };

    const navLinkStyle = {
        color: '#ccc',
        fontSize: '1rem',
        marginLeft: '1rem',
    };

    const activeLinhStyle = {
        color: '#fff',
        fontWeight: 600,
        boderBottom: ' 2px solid #fff',
    };

    return (

        <>
            <Navbar expand='lg' style={navbarStyle} variant='dark' className='py-3 px-4'>
                <Navbar.Brand as={Link} to="/" style={brandStyle} >
                    Control de Estudiantes
                </Navbar.Brand>

                <Nav className='ms-auto'>
                    <Nav.Link
                        as={Link}
                        to="/estudiantes"
                        style={location.pathname === '/estudiantes' ? { ...navLinkStyle, ...activeLinhStyle } : navLinkStyle}
                    >
                        <FaUsers className='ms-auto'>
                            Estudiante
                            </FaUsers>
                    </Nav.Link>
                </Nav>
            </Navbar>

            {/* //Container */}
            <Container className='py-4 animate_animated animate_fadeIn'>
                { children }
            </Container>
            <Footer/>
        </>
    );
}

export default Page;