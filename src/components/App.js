import { Routes, Route, Navigate } from 'react-router';
import HomePage from './home/HomePage';
import DetailsPage from './details/DetailsPage';
import './App.css';

function App() {
  return (
    <div>
      <main>
        <Routes>

          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
