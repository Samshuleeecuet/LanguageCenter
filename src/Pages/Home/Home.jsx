import React from 'react';
import SliderSection from './SliderSection';
import useDynamicTitle from '../../Hooks/DynamicTitle/useDynamicTitle';

const Home = () => {
    useDynamicTitle('Home')
    return (
        <div>
            <SliderSection/>
        </div>
    );
};

export default Home;