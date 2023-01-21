import React from 'react';
import Cars from '../components/Cars';

const ClassActivityOne = () => {
    let title = "Car Blog";
    return (
        <div>
            <h1>{title}</h1>
            <Cars brand="Toyota" model="Avalon" year="2020" />
            <Cars brand="BMW" model="7 Series" year="2022" />
            <Cars brand="Mercedes" model="S43" year="2021" />
            <Cars brand="Audi" model="S7" year="2023" />
            <Cars brand="Kia" model="Telluride" year="2023" />
        </div>
    );
}

export default ClassActivityOne;
