import React from 'react';
import './MainPage.css';
import Card from '../Card/Card';
import PriceCard from '../PriceCard/PriceCard';
import MaintFirstPage from '../FirstPage/MaintFirstPage/MaintFirstPage';
import MainSecondPage from '../SecondPage/MainSecondPage/MainSecondPage';

const MainPage = () => {
    return (
        <>

            <div className='MaintFirstPage-size'>
                <MaintFirstPage />
            </div>

            <div className='MainSecondPage-size'>
                <MainSecondPage />
            </div>

            <div className='card-size'>
                <Card />
            </div>
            <div className='price-size'>
                <PriceCard />
            </div>


        </>
    )
}

export default MainPage;