import React from 'react'

function Home() {
    return (
        <section id='home'>
            <h1>Hi, my name is</h1>
            <h2>Santhosh S.</h2>
            <h3>I build things on web.</h3>
            <div className="home_p">
                <p>I specialize in front-end web development, with a focus on crafting visually stunning and intuitive user interfaces.</p>
            </div>
            <div className="home_btn">
                <a className='get_in_touch' href="mailto:subramanisanthosh00@gmail.com">Get In Touch</a>
            </div>
        </section>
    )
}

export default Home