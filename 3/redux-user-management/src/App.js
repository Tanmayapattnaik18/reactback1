import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserDetailsPage from './components/UserDetailsPage';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user/:id' element={<UserDetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
