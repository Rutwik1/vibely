import React from 'react';
import './SideBar.css';
import Logo from '../../Logo/Logo';
import { MdVerified } from 'react-icons/md';
import ellipse1 from './ellipse1.svg';
import ellipse2 from './ellipse2.svg';
import ellipse3 from './ellipse3.svg';
import ellipse4 from './ellipse4.svg';


const SideBar = () => {
    const imagePath1 = 'https://i.ibb.co/ZYFDt9C/pexels-pixabay-220453.jpg'
    const imagePath2 = 'https://i.ibb.co/t8q7PDZ/pexels-sound-on-3760845.jpg'
    const imagePath3 = 'https://i.ibb.co/3hpxXPF/pexels-luiz-woellner-fotografia-16948663.jpg'
    const imagePath4 = 'https://i.ibb.co/8jJHsKw/pexels-etan-4065242.jpg'
    const imagePath5 = 'https://i.ibb.co/T2KWWsC/pexels-artem-malushenko-3660033.jpg'


    return (

        <>
            <main className='sidebar_container'>

                <div className="logo">
                    <Logo />
                </div>

                <div className='text-1'>
                    <h4>North Borders Chat</h4>
                </div>

                <div className='sidebar-container-1'>
                    <div className='sidebar-items'>
                        <div className='sidebar-flex'>
                            <img src={imagePath1} alt="p-image" className='sidebar-image' />
                            <div className='verified-icon'>
                                <MdVerified fill='#1da194' className='verified-inside' />
                            </div>
                        </div>
                        <div className='sidebar-text-cn2'>
                            <p className='sidebar-text2'><strong>Travel Photo Challenge</strong> <br />Looing to sell this brand new <br /> Sony A6000 bundle...</p>
                        </div>
                    </div>

                    <div className='mutual-list-cn'>
                        <div className='mutual-img-cn1'>
                            <img src={imagePath3} alt="p-image" className='mutual-image1' />
                        </div>
                        <div mutual-img-cn2>
                            <img src={imagePath4} alt="p-image" className='mutual-image2' />
                        </div>
                        <div mutual-img-cn3>
                            <img src={imagePath5} alt="p-image" className='mutual-image3' />
                        </div>
                        <div className='mutual-count'>
                            <span>+4</span>
                        </div>
                    </div>
                </div>


                <div className='sidebar-container-2'>
                    <div className='sidebar_cn-2'>
                        <div className='sidebar-items'>
                            <div className='sidebar-flex'>
                                <img src={imagePath2} alt="p-image" className='sidebar-image' />
                                <div className='verified-icon'>
                                    <MdVerified fill='#1da194' className='verified-inside' />
                                </div>
                            </div>
                            <div className='sidebar-text-cn2'>
                                <p className='sidebar-text2'><strong>Self-Promo 📸</strong> <br />DJ SICK joined the channel 👋</p>
                            </div>
                        </div>

                        <div className='mutual-list-cn'>
                            <div className='mutual-img-cn1'>
                                <img src={imagePath3} alt="p-image" className='mutual-image1' />
                            </div>
                            <div mutual-img-cn2>
                                <img src={imagePath4} alt="p-image" className='mutual-image2' />
                            </div>
                            <div mutual-img-cn3>
                                <img src={imagePath5} alt="p-image" className='mutual-image3' />
                            </div>
                            <div className='mutual-count1'>
                                <span>+412</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cube">
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                </div>

                <div className="cube1">
                    <div className="dot">. .</div>
                    <div className="dot">. .</div>
                </div>

                <div className="cube2">
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                    <div className="dot">. . .</div>
                </div>

                <div className="box">
                    <div className="ellipse-wrapper-1">
                        <img className="ellipse-1" alt="Ellipse" src={ellipse1} />
                    </div>
                    <div className="ellipse-wrapper-2">
                        <img className="ellipse-2" alt="Ellipse" src={ellipse2} />
                    </div>
                    <div className="ellipse-wrapper-3">
                        <img className="ellipse-3" alt="Ellipse" src={ellipse3} />
                    </div>
                    <div className="ellipse-wrapper-4">
                        <img className="ellipse-4" alt="Ellipse" src={ellipse4} />
                    </div>
                    <div className='circle-sm'></div>
                    <div className='circle-md'></div>
                </div>


            </main >

        </>

    )
}

export default SideBar;