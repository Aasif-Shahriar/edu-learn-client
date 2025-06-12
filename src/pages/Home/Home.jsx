import React from 'react';
import Banner from './banner/Banner';
import Service from './services/Service';

const Home = () => {
    return (
        <div className=''>
            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>
            {/* services */}
            <div className='container mx-auto'>
                <Service></Service>
            </div>

            <title>Home - EduLearn</title>
        </div>
    );
};

export default Home;