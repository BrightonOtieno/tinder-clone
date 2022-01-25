import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
  
      <Router>
        {/* <Header/> */}

        {/* individual CHAT ROUTE */}
          <Routes>
            <Route  path="/chat/:person" element={
              <>
                <Header backButton='/chat'/>  
                <ChatScreen/>
                
              </>
            
            }/>
          </Routes>
        {/* General CHAT ROUTE */}
          <Routes>
            <Route  path="/chat" element={
              <>
                <Header backButton='/'/>  
                <Chats/>
              </>
            
            }/>
          </Routes>
        
        {/* HOME ROUTE */}
        <Routes>
            <Route path="/" element={
            <>
              <Header /> <TinderCards/> <SwipeButtons/>
            </>
          }/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
{/* Header */}
        {/* Card */}
{/* Buttons below the cards */}


{/* chart screen */}
  {/* individual chart screen */}