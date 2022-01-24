import React from 'react';
import Chat from './Chat';
import './Chats.css';
const Chats = () => {
    return(
        <div>
        
            <Chat
                name="Mark"
                message="yo what up"
                timestamp="40 seconds ago"
                profilePic="https://api.time.com/wp-content/uploads/2017/02/john-wick-2-keanu-reeves1.jpg"
            />
            
            <Chat
                name="Ellen "
                message="Hey how was work today?"
                timestamp="4 seconds ago"
                profilePic="https://cdn.mos.cms.futurecdn.net/g2sGmWUqSffTsQYrqCjW5d.jpg"
            />

            <Chat
                name="Kelvin"
                message="yo what up"
                timestamp="40 seconds ago"
                profilePic="https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1617291443&w=720&h=405"
            />
            <Chat
                name="Alan"
                message="yo what up"
                timestamp="40 seconds ago"
                profilePic="https://api.time.com/wp-content/uploads/2017/02/john-wick-2-keanu-reeves1.jpg"
            />
        </div>
        );
        

};

export default Chats;
