import React from 'react'

function Social() {
    return (
        <div className="social_section">
            <div className="right_link">
                <ul className='ul_of_links'>
                    <li><a href="https://github.com/Alpha-santhosh" target='_blank'><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/santhosh-subramani/" target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="mailto:subramanisanthosh00@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                <div className="r_line"></div>
            </div>
            <div className="left_link">
                <a className='email_rotate' href="mailto:subramanisanthosh00@gmail.com"target='_blank'>subramanisanthosh00@gmail.com</a>
                <div className="l_line"></div>
            </div>
        </div>
    )
}

export default Social