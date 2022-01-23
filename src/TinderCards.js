import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"steve jobs",
            url:'https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1617291443&w=720&h=405'
        },
        {
            name:"ben kim",
            url:'https://bsmedia.business-standard.com/_media/bs/img/article/2018-03/22/full/1521664011-0145.jpg'
        },

    ])

    return (
        <div>
            {people.map((person)=>(
                <div className="tinderCards__cardContainer">
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up','down']}
                    >
                        <div 
                        className="card" 
                        style={{backgroundImage:`url(${person.url})`}}>
                        <h3>{person.name}</h3>
                        </div>
                    </TinderCard>

                </div>
                

            ))}
        </div>
    )
}

export default TinderCards;
