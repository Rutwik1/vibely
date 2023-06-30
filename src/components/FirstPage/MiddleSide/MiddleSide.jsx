import React from 'react';
import './MiddleSide.css';



const MiddleSide = () => {

    const imagePath1 = 'https://i.ibb.co/wWnppgh/pexels-koolshooters-6976933-1-u-PZm8v-RB6-transformed.png'
    const imagePath2 = 'https://i.ibb.co/qD0gKLr/smiling-curly-lady-sweater-touching-lips-with-finger-playfully-looking-camera.jpg'
    const imagePath3 = 'https://i.ibb.co/S6ZCwFJ/young-woman-with-round-glasses-yellow-sweater.jpg'
    const imagePath4 = 'https://i.ibb.co/Q8PxdDb/close-beauty-portrait-woman-with-perfect-skin-natural-makeup-golden-patches-eyes-moisturize-skin-rel.jpg'


    return (
        <>

            <div className='middleside-container'>


                <div className='middleside-block-1'>
                    <div className='middleside-items'>
                        <img src={imagePath1} alt="p-image" className='middleside-image' />
                    </div>
                    <div className='middleside-text-cn'>

                        <h2>North Borders Lavendaire Community</h2>

                        <p>
                            Hey What's up! Hope you're having a shit one. I've teamed up with Vibely to make<br />
                            challenges for you to take part rather than host them on my instagram stories and<br />
                            in a really dodge way  Here Vibely you can chat to other people in our community.
                        </p>

                    </div>

                </div>
            </div>


            <div className='middleside-container-2'>
                <div className='middleside-items-2'>
                    <div className='middleside-flex-2'>
                        <img src={imagePath2} alt="p-image" className='middleside-image-2' />

                        <div className='middleside-text-cn-2'>
                            <h3>Travel Photo Challenge</h3>

                            <p>
                                Hey What's up! Hope you have shit one. I've teamed up with Vibely<br />
                                challenges for you to take part rather than host them on instagram<br />
                                in a really dodge way Here Vibely you can chat other people in our.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='middleside-container-3'>
                <div className='middleside-items-3'>
                    <div className='middleside-flex-3'>
                        <img src={imagePath3} alt="p-image" className='middleside-image-3' />

                        <div className='middleside-text-cn-3'>
                            <h3>Street Style Challenge</h3>

                            <p>
                                Hey What's up! Hope you have shit one. I've teamed up with Vibely<br />
                                challenges for you to take part rather than host them on instagram<br />
                                in a really dodge way Here Vibely you can chat other people in our.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='middleside-container-4'>
                <div className='middleside-items-4'>
                    <div className='middleside-flex-4'>
                        <img src={imagePath4} alt="p-image" className='middleside-image-4' />

                        <div className='middleside-text-cn-4'>
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

export default MiddleSide;