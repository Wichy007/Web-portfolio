import { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import "@fortawesome/fontawesome-free/css/all.min.css";



const NavBar = () => {
    const [activeLink, setActiveLink] = useState('skills');
    const [scrolled, setscrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setscrolled(true)
            }else{
                setscrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return ()=>window.removeEventListener('scroll', onScroll)
    },[])

    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }
    return(
        <Navbar expand='lg' className={scrolled?"scrolled":""}>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link' } onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#footer" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Resume&Github</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/naravit-bunthap-100391264/' target='_blank'><img src={navIcon1} alt="" /></a>
                            {/* <a href='#' ><img src={navIcon2} alt="" style={{borderRadius:"50%", width:'17px'}} /></a>
                            <a href='#'><img src={navIcon3} alt="" /></a> */}
                        </div>
                        <button className='vvd' onClick={()=>console.log('connect')}><a href='#connect'>Let's Connect</a></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar