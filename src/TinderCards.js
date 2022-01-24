import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css';
import database from "./firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        database
            .collection('people')
            .onSnapshot((snapshot)=>(
            setPeople(snapshot.docs.map((doc)=>doc.data()))
        ))

    }, []);

    //console.log(people);

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
