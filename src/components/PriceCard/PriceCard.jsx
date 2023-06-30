import React from 'react';
import './PriceCard.css';
import { MdHowToVote } from 'react-icons/md';
import { ImTrophy } from 'react-icons/im';


const PriceCard = () => {
    const imagePath1 = 'https://i.ibb.co/px0ZGYT/pexels-sound-on-3760757.jpg'


    return (
        <>

            <div className='Price-container'>
                <div className='price-card'>

                    <div className='trophy-container'>
                        <div className='trophy-icon'>
                            <ImTrophy fill='#bd7d35' className="trophy-inside" />
                        </div>
                        <div className='price-text-cn1'>
                            <p className='price-text1'>Prize <br /> <strong>Shoutout</strong></p>
                        </div>
                    </div>

                    <div className='price-card-items'>
                        <img src={imagePath1} alt="price-image" className='price-image' />
                        <div className='price-text-cn2'>
                            <p className='price-text2'>Winner <br /> <strong>Daniella Davis</strong></p>
                        </div>

                        <div className='vote-container'>
                            <div className='vote-icon'>
                                <MdHowToVote fill='#bd7d35' className="vote-inside" />
                            </div>
                            <span>18 Votes</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='shadow'>

            </div>

        </>
    )
}

export default PriceCard;