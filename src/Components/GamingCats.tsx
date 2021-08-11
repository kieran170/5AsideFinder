import React from 'react';
import { useHistory } from "react-router-dom";


interface IProps {
    category: string;
    games?: { name: string, img: string }[];
}

export default function GamingCats(props: IProps) {
    const { category } = props;
    const { games } = props;
    const history = useHistory();


    if (!games) {
        return <p>Loading</p>
    }

    return (
        <div>
            <h2 className='single-category-title'>{category}</h2>
            <div className='game-category-container'>
                {games.map((game, i) => {
                    return (
                        <div key={i} onClick={() => history.push(`/games/${game.name.replace(/\s/g, '')}`)} className='single-game-container'>
                            <img className='single-game-image' src={game.img} alt={game.name} />
                            <h4 style={{ paddingBottom: '20px', border: 'none', color: '#F0FFF2' }}>{game.name}</h4>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
