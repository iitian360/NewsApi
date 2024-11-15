import './App.css';
import News from './Components/News.jsx';
import Sidebar from './Components/Sidebar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// function App() {
//   return (
//     <>
//     <News/>
//     </>
//   );
// }

// export default App;
const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar remains static */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            {/* Define routes for each category */}
            <Route path="/:category" element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
