import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './Login/Login';
import Menus from './MenusGrid/MenusGrid';
import LearnMore from './LearnMore/LearnMore';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users'); // Make sure the server is running
        const data = await response.json();
        setUsers(data); // Set the fetched users to state
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to only run once on mount

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div id="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/learnmore" element={<LearnMore />} />
          </Routes>

          {/* Render fetched users for demonstration */}
          <div>
            <h2>Users List</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.username} ({user.email})
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
