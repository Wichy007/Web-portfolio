import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from "../assets/img/cat-astronaut.png"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Junior Software Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random()*100)
    const period = 2000

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        }, delta)

        return ()=>{ clearInterval(ticker)}
    }, [text])

    const tick = ()=>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }
    }

    return(
        <section className='banner' id='home'>
            <Container fluid >
                <Row className='align-item-center' style={{display:"flex", justifyContent:"center"}}>
                    <Col style={{padding:'50px'}} xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1 style={{width:'100%'}}>{`Hi I'm Wichy`}<br/><span className='wrap'>{text}</span></h1>
                        <p>Hello, I'm from the medical field, but now I'm in bootcamp with Generation Thailand to learn <b>programming languages</b>, <b>behavioral skills and mindset.
                        such as growth mindset, time management, teamwork, and orientation to detail</b>.
                        I think I like to solve puzzles and create something that uses technology to reduce work load.
                        So I am excited about this field and want to know more and more about knowledge for creating something for people and the world.<br /><br />
                        Let me tell you more about myself in this port!
                        </p>
                        <button onClick={()=>console.log('connect')}><a href='#connect' style={{color:"white"}}>Let's connect</a><ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner