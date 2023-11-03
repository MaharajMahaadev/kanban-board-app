import './styles.css';
import React from 'react';
import Board from './features/board';
import { useState, useEffect } from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [newUser, setNewUser] = useState('');
  

  useEffect(() => {
    const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const usersData = data.users;
        const ticketsData = data.tickets;

        const userMap = {};
        usersData.forEach(user => {
          userMap[user.id] = user;
        });

        const userTickets = {};
        ticketsData.forEach(ticket => {
          const userId = ticket.userId;
          if (userMap[userId]) {
            if (!userTickets[userId]) {
              userTickets[userId] = [];
            }
            userTickets[userId].push(ticket);
          }
        });

        const userDataWithTickets = usersData.map(user => ({
          user: user.name,
          cards: userTickets[user.id] || [], 
        }));

        setUsers(userDataWithTickets);
      })
      .catch(error => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  const handleUserAdd = () => {
    if (newUser.trim() !== '') {
      setUsers((prevData) => [
        ...prevData,
        { user: newUser, cards: [] },
      ]);
      setNewUser('');
    }
  }
  

  return (
    <div className="App">
      <h1>Kanban Application</h1>
      <Board data={users} />
    </div>
  );
}

export default App;
