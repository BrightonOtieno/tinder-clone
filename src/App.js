import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route index path="/" element={<Header/>}/>
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