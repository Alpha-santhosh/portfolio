import React from 'react'

function Contact() {
    return (
        <section id='contact' style={{ justifyContent: "flex-end", alignItems: "center" }}>
            <div className="about_top" style={{ margin: "0px" }}>
                <h3 className='contact_h3'> <span style={{
                    fontSize:
                        "14px"
                }}>05.</span> What's Next?</h3>
            </div>
            <br />
            <h4>Connect With me as a true JS Developer</h4>
            <br />
            <p>Just hit this in your terminal with npm installed</p>
            <br />
            <a className='get_in_touch contact_section_btn' href="mailto:subramanisanthosh00@gmail.com">Contact</a>
        </section>
    )
}

export default Contact