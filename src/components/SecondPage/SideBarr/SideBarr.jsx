import React from 'react';
import './SideBarr.css';
import Logo from '../../Logo/Logo';
import { MdVerified } from 'react-icons/md';


const SideBarr = () => {
    const imagePath1 = 'https://i.ibb.co/4Zr2nj8/pexels-nitin-khajotia-1516680.jpg'
    const imagePath2 = 'https://i.ibb.co/2yvBMwF/pexels-vin-cius-estev-o-2592282.jpg'

    return (

        <>
            <main className='sidebarr_container'>

                <div className="logoo">
                    <Logo />
                </div>

                <div className='textt-1'>
                    <h4>North Borders Chat</h4>
                </div>

                <div className='sidebarr-container-1'>
                    <div className='sidebarr-items'>
                        <div className='sidebarr-flex'>
                            <img src={imagePath1} alt="p-image" className='sidebarr-image' />
                            <div className='verified-iconn'>
                                <MdVerified fill='#1da194' className='verified-insidee' />
                            </div>
                        </div>
                        <div className='sidebarr-text-cn2'>
                            <p className='sidebarr-text2'><strong>James Blair</strong> <br />Looking to sell this brand new <br /> Sony A6000 bundle...</p>
                        </div>
                    </div>
                </div>

                <div className='sidebarr-container-2'>
                    <div className='sidebarr_cn-1'>
                        <div className='sidebarr-items'>
                            <div className='sidebarr-flex'>
                                <img src={imagePath2} alt="p-image" className='sidebarr-image' />
                                <div className='verified-iconn'>
                                    <MdVerified fill='#1da194' className='verified-insidee' />
                                </div>
                            </div>
                            <div className='sidebarr-text-cn2'>
                                <p className='sidebarr-text2'><strong>Azealia Hutchings</strong> <br />Hello Allex, how are you? 👋</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main >

        </>

    )
}

export default SideBarr;