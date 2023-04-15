import React from 'react'

function About() {
    return (
        <section id='about'>
            <div className="about_top">
                <h3 className='subheading'> <span>02.</span> About Me</h3>
                <div className="line"></div>
            </div>
            <div className="about_content">
                <div className="about_content_top">
                    <p>Hi!, my name is <span>Santhosh S</span> and I'm a front-end developer with a passion for building dynamic, responsive web applications.</p>
                    <br />
                    <p>As a recent B.E. pass-out, I am excited to take on new challenges and leverage my skills to contribute to innovative projects. I am always eager to learn new technologies and tools, and I thrive in collaborative environments that value creativity and teamwork.</p>
                    <br />
                    <p>If you're looking for a talented and motivated front-end developer to bring your web application to life, please don't hesitate to contact me. I look forward to working with you!</p>
                </div>
                <div className="about_photo_section">
                    <a href="https://github.com/Alpha-santhosh" target='_blank' >
                        <img className='profile_img' src="https://avatars.githubusercontent.com/u/83463926?v=4" alt="photo" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About