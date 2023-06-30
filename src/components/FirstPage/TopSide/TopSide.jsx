import React from 'react';
import './TopSide.css';
import { MdVerified } from 'react-icons/md';
import { BsFillReplyFill } from 'react-icons/bs';
import ellipse3 from './ellipse3.svg';



const TopSide = () => {
    const imagePath1 = 'https://i.ibb.co/t8q7PDZ/pexels-sound-on-3760845.jpg'


    return (
        <>

            <div className='topside_container' >

                <div className='topside_box'>
                    <div className='topside-flex'>
                        <img src={imagePath1} alt="p-image" className='topside-image' />
                        <div className='verified-icon-2'>
                            <MdVerified fill='#1da194' className='verified-inside-2' />
                        </div>
                    </div>
                    <div className='topsider-text-cn'>
                        <h2>The Lavendaire Community</h2>
                        <span>@lavendaire</span>
                        <p>
                            Hey What's up! Hope you're having a shit one. I've teamed up with Vibely to make some photography <br />
                            challenges for you to take part in rather than host them on my instagram stories and have me judge it <br />
                            in a really dodge way 😂 Here on Vibely you can chat to other people in our community and personally<br />
                            judge the best photo YOU like. There will be weekly challenges and each winner will recieve a prize! It's<br />
                            free to join and to play so what do you have to lose? See you in there 👊 - Mike.
                        </p>
                    </div>

                    <div className='access-container'>
                        <div className='access-now'>
                            <span>Access Now</span>
                        </div>
                    </div>

                    <div className='share-container'>
                        <div className='share-icon'>
                            <BsFillReplyFill fill='#1da194' className='share-inside' />
                        </div>
                        <span>Share</span>
                    </div>

                    <div className="cube3">
                        <div className="dot">. . .</div>
                        <div className="dot">. . .</div>
                        <div className="dot">. . .</div>
                        <div className="dot">. . .</div>
                        <div className="dot">. . .</div>
                        <div className="dot">. . .</div>
                        <div className="dot">. . .</div>
                        <div className="dot">. . .</div>
                    </div>

                    <div className="cube4">
                        <div className="dot">. . . . . .</div>
                        <div className="dot">. . . . . .</div>
                    </div>

                    <div className="cube5">
                        <div className="dot">. . . . . .</div>
                        <div className="dot">. . . . . .</div>
                        <div className="dot">. . . . . .</div>
                        <div className="dot">. . . . . .</div>
                        <div className="dot">. . . . . .</div>
                        <div className="dot">. . . . . .</div>
                    </div>

                    <div className="ellipse-wrapper-5">
                        <img className="ellipse-5" alt="Ellipse" src={ellipse3} />
                    </div>

                </div>

            </div>

        </>
    )
}

export default TopSide;