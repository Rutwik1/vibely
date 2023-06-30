import React from 'react';
import './MiddleSidee.css';


const MiddleSidee = () => {
    const imagePath1 = 'https://i.ibb.co/2yvBMwF/pexels-vin-cius-estev-o-2592282.jpg'
    const imagePath2 = 'https://i.ibb.co/J5ZqV14/pexels-yuri-manei-2272854.jpg'


    return (
        <>

            <main className='middlesidee_container'>

                <div className='middlesidee_date'>
                    <span>12:03AM</span>
                </div>

                <div className='middlesidee-container-1'>
                    <div className='middlesidee-items'>
                        <div className='middlesidee-flex-1'>
                            <img src={imagePath1} alt="p-image" className='middlesidee-image' />
                        </div>
                        <div className='middlesidee-text-cn'>
                            <div className='middleside_text-1'>
                                <p>Alright lads, mst of us aren't going anywhere anytime soon so<br />
                                    let's atleast pretend like we can. Dig through the archives and<br />
                                    post your favorite travel shot 📸
                                </p>
                            </div>
                            <span>Message seen, 12:05AM</span>
                        </div>
                    </div>
                </div>

                <div className='middlesidee-container-2'>
                    <div className='middlesidee-items'>

                        <div className='middlesidee-text-cn2'>
                            <div className='middleside_text-2'>
                                <p>Alright lads, mst of us aren't going anywhere anytime soon so<br />
                                    let's atleast pretend like we can. Dig through the archives and<br />
                                    post your favorite travel shot 📸
                                </p>
                            </div>
                            <span>Message seen, 12:05AM</span>
                        </div>
                        <div className='middlesidee-flex-2'>
                            <img src={imagePath2} alt="p-image" className='middlesidee-image' />
                        </div>
                    </div>
                </div>

                <div className='middlesidee-container-3'>
                    <div className='middlesidee-items'>
                        <div className='middlesidee-flex-3'>
                            <img src={imagePath1} alt="p-image" className='middlesidee-image' />
                        </div>
                        <div className='middlesidee-text-cn'>
                            <div className='middleside_text-1'>
                                <p>Ok. perfect. See you there!</p>
                            </div>
                            <span>Message seen, 12:05AM</span>
                        </div>
                    </div>
                </div>

                <div className='middlesidee-container-4'>
                    <div className='middlesidee-items'>

                        <div className='middlesidee-text-cn4'>
                            <div className='middleside_text-4'>
                                <p>I will do this challenge, thanks!</p>
                            </div>
                            <span>Message seen, 12:05AM</span>
                        </div>
                        <div className='middlesidee-flex-4'>
                            <img src={imagePath2} alt="p-image" className='middlesidee-image' />
                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default MiddleSidee;