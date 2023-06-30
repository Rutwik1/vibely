import React from 'react';
import './MainSecondPage.css';
import SideBarr from '../SideBarr/SideBarr';
import TopSidee from '../TopSidee/TopSidee';
import DownSidee from '../DownSidee/DownSidee';
import MiddleSidee from '../MiddleSidee/MiddleSidee';


const MainSecondPage = () => {
    return (
        <>

            <main className='MainSecondPage'>
                <div className='MainSecondPage_Container'>
                    <div>
                        <SideBarr />
                    </div>

                    <div>
                        <TopSidee />
                    </div>

                    <div>
                        <MiddleSidee />
                    </div>


                    <div>
                        <DownSidee />
                    </div>

                </div>
            </main>


        </>
    )
}

export default MainSecondPage;