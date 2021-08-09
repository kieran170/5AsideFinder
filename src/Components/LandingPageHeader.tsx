import React from 'react';
import { GiSoccerField, GiAutogun, GiRaceCar } from "react-icons/gi";

export default function LandingPageHeader() {
    return (
        <div className='landing-page-header-container'>
                <h3>Hello, and welcome to FindASide, find people across the world to play your favorite games... with or against!</h3>
                <div className='landing-page-header-img-container'>
                    <GiSoccerField className='landing-page-icons' />
                    <GiAutogun className='landing-page-icons' />
                    <GiRaceCar className='landing-page-icons' />
                </div>
            </div>
    )
}
