import React from 'react';
import LandingPageHeader from '../Components/LandingPageHeader';
import GamingCats from '../Components/GamingCats';

export default function LandingPage() {

    const sports = [
        {
            name: 'Fifa 21',
            img: 'https://images.daznservices.com/di/library/GOAL/ca/f3/fifa-21-kylian-mbappe_5y8kt6rcv8tf1kifrjd2ku44c.jpg?t=2054301555&quality=100'
        },
        {
            name: 'NBA 2K21',
            img: 'https://cdn1.dotesports.com/wp-content/uploads/2020/07/01093935/Zion.jpg'
        },
        {
            name: 'PGA Tour 2k21',
            img: 'https://www.golfchannel.com/sites/default/files/2020/05/14/PGA%20TOUR%202K21%20Key%20Art%201920x1080.jpg'
        },
        {
            name: 'Rocket League',
            img: 'https://www.gamespot.com/a/uploads/screen_kubrick/1574/15746725/3734562-123.jpg'
        },
        {
            name: 'UFC 4',
            img: 'https://lh3.googleusercontent.com/proxy/Vwi5QnXpqJCmrGcEDig8lu9yy9qjp7KWv8x4t3a79E6mtC__xRRPkSp-IdLiV0O4VUgpZbbq_EfaOoPxnYEZYPbxCoycEM46HHyfB3_xG2p3YcgNRAgiV5XUa_O4baQbPvibcoZTWWI_'
        }
    ];

    const shooter = [
        {
            name: 'Call of Duty: Modern Warfare',
            img: 'https://hb.imgix.net/d9ffbcf4aa5df29167b21484b9aac12507a9deb9.jpg?auto=compress,format&fit=crop&h=353&w=616&s=523a92154bf15e96dc83c5c113f93bcf'
        },
        {
            name: 'Call of Duty: Warzone',
            img: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg'
        },
        {
            name: 'Fortnite',
            img: 'https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg'
        }
    ]

    return (
        <div className='landing-page-container'>
            <LandingPageHeader />
            <GamingCats category='Sports' games={sports} />
            <GamingCats category='Shooter' games={shooter} />
        </div>
    )
}
