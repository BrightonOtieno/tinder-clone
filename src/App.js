import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route index path="/chat" element={<TinderCards/>}/>
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