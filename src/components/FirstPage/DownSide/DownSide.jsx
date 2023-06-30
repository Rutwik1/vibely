import React from 'react';
import './DownSide.css';

const DownSide = () => {
    const imagePath1 = 'https://i.ibb.co/zNXC6jB/pexels-artem-malushenko-3660033-transformed.png'


    return (
        <>

            <div className='ds-heading'>
                <h3>Announcements</h3>
            </div>

            <div className='downside-container'>
                <div className='downside-items'>
                    <div className='downside-flex'>
                        <img src={imagePath1} alt="p-image" className='downside-image' />

                        <div className='downside-text-cn'>
                            <h3>Free Shot Challenge</h3>

                            <p>
                                Hey What's up! Hope you have shit one. I've teamed up with Vibely<br />
                                challenges for you to take part rather than host them on instagram<br />
                                in a really dodge way Here Vibely you can chat other people in our.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DownSide;