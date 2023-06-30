import React from 'react';
import './TopSidee.css';
import { MdVerified } from 'react-icons/md';
import { RiPhoneFill, RiInformationFill } from 'react-icons/ri';


const TopSidee = () => {
    const imagePath1 = 'https://i.ibb.co/2yvBMwF/pexels-vin-cius-estev-o-2592282.jpg'


    return (
        <>

            <div className='topsidee_container' >
                <div className='topside_box'>

                    <div className='topsidee-flex'>
                        <img src={imagePath1} alt="p-image" className='topsidee-image' />
                        <div className='verified-icon-tp'>
                            <MdVerified fill='#1da194' className='verified-inside-tp' />
                        </div>
                    </div>
                    <div className='topsidee-text-cn'>
                        <h2>Azealia Hutchings</h2>
                        <span>@azealia</span>
                    </div>

                    <div className='icons_container'>
                        <div className='call-icon'>
                            <RiPhoneFill fill='#3ace95' className='call-inside' />
                        </div>
                        <div className='info-icon'>
                            <RiInformationFill fill='#3ace95' className='call-inside' />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default TopSidee;