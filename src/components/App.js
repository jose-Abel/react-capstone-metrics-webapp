import { Routes, Route, Navigate } from 'react-router';
import HomePage from './layout/home/HomePage';
import DetailsPage from './layout/details/DetailsPage';
import classes from './App.module.css';

function App() {
  return (
    <div>
      <main className={classes.mainComponent}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
