import React, {useRef} from "react";
import { useState } from "react";
import headerImg from "../assets/img/cat-astronaut.png"
import emailjs from '@emailjs/browser'
// require('dotenv').config();



const Connect = () => {
    const form = useRef();
    const [input, setInput] = useState({})

    const handlerChange = ({target}) => {
        const name = target.name
        const value = target.value
        setInput(prev=>({...prev,[name]:value}))
    }

    const sendEmail = (e) => {
      e.preventDefault();
        if(Object.keys(input).length === 5) {
            emailjs.sendForm('service_ogcam5a', 'template_40y87kb' , form.current,'xpdbyIu-B45D4NbUy')
            .then((result) => {
                alert('send data sucess, Thank you!!!')
                setInput({})
            })
            .catch((error) => {
                alert('send data fail, please try again')
            });
        }else{
            alert('please fill every feild in form')
        }
    }
       
    return(
        <div className="connect-section" id="connect">
            <div className="connect-box">
                <div className="cat-image">
                    <img src={headerImg} alt="Meow" />
                </div>
                <form ref={form} onSubmit={sendEmail} className="connect-form" style={{padding:"50px"}}>
                    <div className="title" style={{width:"100%", textAlign:"start"}}>
                        <h2>Get In Touch</h2>
                    </div>
                    <div className="firstname-lastname" style={{width:"100%", gap:"10px"}}>
                        <input type="text" placeholder="name" name="name" onChange={handlerChange} value={input.name || ""}/>
                        <input type="text" placeholder="lastname" name="lastname" onChange={handlerChange} value={input.lastname || ""}/>
                    </div>
                    <div className="email-phoneNo" style={{width:"100%", gap:"10px"}}>
                        <input type="text" placeholder="e-mail" name="email" onChange={handlerChange} value={input.email || ""}/>
                        <input type="text" placeholder="phone No." name="phoneNo" onChange={handlerChange} value={input.phoneNo || ""}/>
                    </div>
                    <div className="message" style={{width:"100%"}}>
                        <textarea placeholder="message" name="message" onChange={handlerChange} value={input.message || ""}/>
                    </div>
                    <div className="send" style={{width:"100%", alignItems:'start', margin:"10px 0"}}>
                        <button type="submit"><span>Send<i className="fa-regular fa-paper-plane" style={{padding:'0 0 0 15px'}}></i></span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Connect

