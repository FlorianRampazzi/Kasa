import React, {useState, useRef, useEffect } from 'react'
import Chevron from '../../assets/images/Chevron.svg'
import './Collapse.css'


export default function Collapse({ title, content}) {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])


    return (
        <div className='kasa-collapse'>
            <div onClick={toggleState} className='kasa-collapse-visible'>
                <h2>{title}</h2>
                <img className={toggle ? 'rotate' : null } src={Chevron} alt='Chevron down' />
            </div>
            <div ref={refHeight} className={toggle ? 'kasa-collapse-toggle animate' : 'kasa-collapse-toggle'} style={{height: toggle ? `${heightEl}` : '0px'}}>
                <p aria-hidden={toggle ? 'true' : 'false'}> {content}</p>
            </div>
        </div>
    )
}