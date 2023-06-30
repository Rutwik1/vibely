import React from 'react';
import './Card.css';
import { AiFillHeart } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';


const Card = () => {

    const imagePath1 = 'https://i.ibb.co/zNXC6jB/pexels-artem-malushenko-3660033-transformed.png'
    const imagePath2 = 'https://i.ibb.co/t8q7PDZ/pexels-sound-on-3760845.jpg'


    return (
        <>
            <div className='Outer-container'>
                <div className='Card-container'>
                    <div>
                        <img src={imagePath1} alt="image-1" className='image-1' />
                    </div>
                    <div className='card-text'>
                        <p>Took this shot 4 years ago, <br /> still one of my favourites 😃</p>
                    </div>
                    <div className='card-items'>
                        <div className='card-flex'>
                            <img src={imagePath2} alt="image-2" className='image-2' />
                            <div className='verified-icon1'>
                                <MdVerified fill='#1da194' className='verified-inside1' />
                            </div>
                        </div>
                        <div className='text-lines'>
                            <p className='text-1'>Jessica <br /> <strong>Ferrand-Torreira</strong></p>
                        </div>

                        <div className='heart-container'>
                            <div className='heart-icon'>
                                <AiFillHeart className="heart-inside" />
                            </div>
                            <span>829</span>
                        </div>
                    </div>

                </div >
            </div>

        </>
    )
}

export default Card;