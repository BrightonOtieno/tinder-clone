import React,{useState} from 'react';

function ChatScreen() {
    const [messages,setMessage] = useState([
        {
            name:'Ellen',
            image:'https://cdn.mos.cms.futurecdn.net/g2sGmWUqSffTsQYrqCjW5d.jpg',
            message:'whats up'
        },
        
        {
            name:'Ellen',
            image:'https://cdn.mos.cms.futurecdn.net/g2sGmWUqSffTsQYrqCjW5d.jpg',
            message:'Hey whats good'
        },
        {
            message:'How is it going'
        }

    ])
    return (
        <div className='chatScreen'>
            <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>
        </div>
    );
}

export default ChatScreen;
