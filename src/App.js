import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}

        {/* CHAT ROUTE */}
          <Routes>
            <Route path="/chat" element={
              <>
              <Header backButton='/'/>{/*with a prop of backbutton*/}
              <h1>hello</h1>
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