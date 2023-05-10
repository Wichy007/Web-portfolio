import React from "react";

const Footer = () => {
    return(
        <div className="footer-section" id="footer">
            <div className="to-top">
                <a href="#home" style={{color:"white", border:"1px solid yellowgreen", padding:'10px', borderRadius:'10px', fontSize:'20px'}}>Back to top</a>
            </div>
            <div className="footer-cv" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <a href="#"><i class="fa-solid fa-file fa-5x" style={{color: "#af79d2"}}></i></a>
                <p style={{padding:'10px 0'}}>My Resume</p>
            </div>
            <div className="footer-git">
                <a href="https://github.com/Wichy007" target="_blank"><i class="fa-brands fa-github fa-5x"></i></a>
                <p style={{padding:'10px 0'}}>My Github</p>
            </div>
            <div className="footer-copyright">
                <p>created by Naravit Bunthap</p>
                <p>credit: youtube webdecoded chanel</p>
                <p>Copyright 2022. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer