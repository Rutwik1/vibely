import React from 'react';
import './DownSidee.css';
import { FaPlus } from 'react-icons/fa';
import { MdPhotoLibrary, MdSend } from 'react-icons/md';

const DownSidee = () => {

    return (
        <>

            <div className='downsidee_container' >
                <div className='downsidee_box'>

                    <div className='icons_container-ds'>
                        <div className='plus_icon-ds'>
                            <FaPlus fill='#3ace95' className='plus_insidee' />
                        </div>
                        <div className='file_icon-ds'>
                            <MdPhotoLibrary fill='#3ace95' className='file-insidee' />
                        </div>
                    </div>

                    <div className='downsidee-text-cn'>
                        <span>Send message to @azealia</span>
                    </div>

                    <div className='send-icon'>
                        <MdSend fill='#585858' className='send-insidee' />
                    </div>

                </div>
            </div>

        </>
    )
}

export default DownSidee;