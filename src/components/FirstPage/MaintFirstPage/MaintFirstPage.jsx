import React from 'react';
import './MaintFirstPage.css';
import SideBar from '../SideBar/SideBar';
import TopSide from '../TopSide/TopSide';
import MiddleSide from '../MiddleSide/MiddleSide';
import DownSide from '../DownSide/DownSide';

const MaintFirstPage = () => {
    return (
        <>
            <main className='MaintFirstPage'>
                <div className='MainFirstPage_Container'>

                    <SideBar />

                    <div>
                        <TopSide />
                    </div>


                    <div>
                        <MiddleSide />
                    </div>

                    <div className='downside-size'>
                        <DownSide />
                    </div>

                </div>
            </main>




        </>
    )
}

export default MaintFirstPage;