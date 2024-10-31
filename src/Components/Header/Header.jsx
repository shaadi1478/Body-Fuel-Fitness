import React from 'react';
import Hero from '../Hero/Hero';
import Equipments from '../Equipments/Equipments';
import HealthSection from '../HealthSection/HealthSection';
import FilterableCardSection from '../FilterableCardSection/FilterableCardSection';
import HealthSection2 from '../HealthSection2/HealthSection2';
import ReviewCard from '../ReviewCard/ReviewCard';
import SuccessStorySection from '../SuccessStorySection/SuccessStorySection';
import Discount from '../Discount/Discount';

const Header = () => {
    return (
        <div>
            <Hero />
            <Equipments />
            <HealthSection />
            <FilterableCardSection />
            <HealthSection2 />
            <SuccessStorySection />
            <Discount />
        </div>
    );
};

export default Header;