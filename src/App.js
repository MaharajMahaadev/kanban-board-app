import './styles.css';
import React from 'react';
import Board from './features/board';
import { useState, useEffect } from 'react';

/*const initialData = [
  {
    user: 'User 1',
    cards: ['Task 1', 'Task 2'],
  },
  {
    user: 'User 2',
    cards: ['Task 3', 'Task 4'],
  },
  // Add more users and cards as needed
];

function App() {
  const [data, setData] = useState(initialData);
  const [newUser, setNewUser] = useState('');

  const handleUserAdd = () => {
    if (newUser.trim() !== '') {
      setData([...data, { user: newUser, cards: [] }]);
      setNewUser('');
    }
  }

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="user-input">
        <input
          type="text"
          placeholder="New User Name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleUserAdd}>Add User</button>
      </div>
      <Board data={data} />
    </div>
  );
}*/


function App() {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [newUser, setNewUser] = useState('');
  

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const usersData = data.users;
        const ticketsData = data.tickets;

        // Create a mapping of user ID to user data for efficient access
        const userMap = {};
        usersData.forEach(user => {
          userMap[user.id] = user;
        });

        // Associate tickets with their respective users
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

        // Create an array with user data and associated tickets
        const userDataWithTickets = usersData.map(user => ({
          user: user.name,
          cards: userTickets[user.id] || [], // Attach user's tickets
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
