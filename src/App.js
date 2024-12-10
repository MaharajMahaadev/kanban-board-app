import './components/styles.css';
import React from 'react';
import Board from './components/board';
import { useState, useEffect } from 'react';
import {data} from "./data";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
        const usersData = data.users;
        const ticketsData = data.tickets;

        const userMap = {};
        usersData.forEach(user => {
          userMap[user.id] = user;
        });

        const userTickets = [];
        ticketsData.forEach(ticket => {
            userTickets.push([ticket, userMap[ticket.userId].name]);
        });

        setUsers(userTickets);
  }
  , []);

  return (
    <div className="App">
      <h1>Kanban Application</h1>
      <Board data={users} />
    </div>
  );
}

export default App;
