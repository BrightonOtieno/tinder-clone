import Avatar from '@material-ui/core/Avatar';
import React,{useState} from 'react';
import './ChatScreen.css';

function ChatScreen() {
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([
        {
            name:'Marry',
            image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
            message:'hi'
        },
        
        {
            name:'Marry',
            image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
            message:'how are you'
        },
        {
            message:'hi, i am doing great'
        }

    ]);
    const handleSend=(e) =>{
        e.preventDefault();
        setMessages([...messages,{message:input}])
        setInput('')
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH MARRY ON 10/08/20</p>
            {messages.map((message)=>(
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>

                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )



                
            ))}

    
            <form className='chatScreen__input'>
                <input
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    type="text" 
                    className='chatScreen__inputField'
                    placeholder='type your message here...'
                />
                <button 
                    type='submit'
                    onClick={handleSend}
                    className='chatScreen__inputButton'>SEND</button>
            </form>
            

        </div>
    );
}

export default ChatScreen;
