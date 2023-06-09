import { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assets/img/wichy-logo.png';
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
                    <img src={logo} alt="Logo" style={{width:'200px'}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link' } onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1GopIBrc-rQcOldPs0-2P4d7eOXDPXSCY/view?usp=sharing" target='_blank' className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Resume</Nav.Link>
                        <Nav.Link href="https://github.com/Wichy007" target='_blank' className={activeLink === 'github' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('github')}>GitHub</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target='_blank' className={activeLink === 'linkedin' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('linkedin')}>LinkedIn</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            {/* <a href='https://www.linkedin.com/in/naravit-bunthap-100391264/' target='_blank'><img src={navIcon1} alt="" /></a> */}
                            {/* <a href='#' ><img src={navIcon2} alt="" style={{borderRadius:"50%", width:'17px'}} /></a>
                            <a href='#'><img src={navIcon3} alt="" /></a> */}
                        </div>
                        <button className='vvd' style={{height:'50px', display:'flex', flexDirection:'column', justifyContent:'center'}} onClick={()=>console.log('connect')}><a href='#connect'>Let's Connect</a></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar