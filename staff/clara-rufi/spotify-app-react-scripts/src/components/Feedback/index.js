import React from 'react'
import './index.css'

function Feedback ({message, level}){
    return <section className={`feedback feedback--${level? level: ''}`}>
    <p>{message}</p>
    </section>
}

export default Feedback