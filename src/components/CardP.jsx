import React from 'react'

function CardP({ data }) {
    const { title, discription, gitLink, liveDemo, tech, img_url } = data;
    return (
        <div className="card">
            <div className="left_side_card">
                <h4 className='card_h4'>Featured Project</h4>
                <h5>
                    <a href={gitLink} target='_blank'>{title}</a>
                </h5>
                <div className="p_descr">
                    <p>{discription}</p>
                </div>
                <ul className='p_ul'>
                    {
                        tech.map((e) => {
                            return <li className='p_li'>{e}</li>
                        })
                    }
                </ul>
                <div className="card_links">
                    <a href={gitLink} target='_blank'><i class="fa-brands fa-github"></i></a>
                    <a href={liveDemo} target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="right_side_card">
                <a href={liveDemo} style={{ padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} target='_blank'>
                    <img src={img_url} alt="" />
                    <div className="color_print" style={{ borderRadius: '5px' }}></div>
                </a>
            </div>
        </div>
    )
}

export default CardP